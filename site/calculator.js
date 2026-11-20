const form = document.getElementById('calc-form');
const currency = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });
const euro = value => currency.format(value);
const amount = id => document.getElementById(id).valueAsNumber;

function calculate(column) {
  const monthly = amount('monthly-' + column)
    + amount('volume') * amount('unit-' + column)
    + amount('rate') * amount('hours-' + column);
  return { monthly, annual: amount('setup-' + column) + 12 * monthly };
}

function refresh() {
  const totals = { a: calculate('a'), b: calculate('b') };
  const valid = form.checkValidity() && Object.values(totals).every(cost => Number.isFinite(cost.annual));
  for (const [id, cost] of Object.entries(totals)) {
    document.getElementById('annual-' + id).textContent = valid ? euro(cost.annual) : '—';
    document.getElementById('ongoing-' + id).textContent = valid ? 'Gestione mensile ' + euro(cost.monthly) : '';
  }
  const difference = document.getElementById('difference');
  document.getElementById('print').disabled = !valid;
  if (!valid) {
    difference.textContent = 'Completa tutte le voci con valori validi. Le pratiche al mese devono essere un numero intero.';
    return;
  }
  const cents = Math.round(totals.a.annual * 100) - Math.round(totals.b.annual * 100);
  difference.textContent = cents === 0 ? 'Nel primo anno le due proposte hanno lo stesso costo.'
    : 'Nel primo anno ' + (cents < 0 ? 'A' : 'B') + ' costa ' + euro(Math.abs(cents) / 100) + ' in meno.';
}

form.addEventListener('input', refresh);
form.addEventListener('submit', event => event.preventDefault());
document.getElementById('print').addEventListener('click', () => window.print());
refresh();

/* Only the dedicated LinkedIn post passes this marker. The destination site
   applies its own consent settings when the reader follows a link. */
const sources = new URLSearchParams(window.location.search).getAll('via');
if (window.location.protocol !== 'file:' && sources.length === 1 && sources[0] === 'linkedin-confronto') {
  const links = [
    ['supplier-guide', 'li_calcolatore_guida'],
    ['process-assessment', 'li_calcolatore_processo'],
  ];
  for (const [id, asset] of links) {
    const link = document.getElementById(id);
    const target = new URL(link.href);
    target.searchParams.set('utm_source', 'linkedin');
    target.searchParams.set('utm_medium', 'organic_social');
    target.searchParams.set('utm_content', asset);
    link.href = target.toString();
  }
}
