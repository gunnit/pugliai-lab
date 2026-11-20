"""Build the single-file edition of the PugliAI calculator."""
from pathlib import Path
import argparse


def replace_once(content, before, after):
    if content.count(before) != 1:
        raise ValueError(f"Expected one occurrence of {before!r}")
    return content.replace(before, after)


def build(destination):
    site = Path(__file__).resolve().parents[1] / "site"
    html = (site / "index.html").read_text()
    # The offline edition uses the device's font, avoiding external requests.
    css = "\n".join(line for line in (site / "style.css").read_text().splitlines()
                    if not line.startswith("@font-face"))
    js = (site / "calculator.js").read_text()
    html = replace_once(html, '<link rel="stylesheet" href="/style.css">', f"<style>\n{css}\n</style>")
    html = replace_once(html, '<script defer src="/calculator.js"></script>', '')
    html = replace_once(html, '</body>', f"<script>\n{js}\n</script>\n</body>")
    download_link = '<a id="offline-download" href="https://github.com/gunnit/pugliai-lab/releases/latest/download/Confronto-preventivi-AI.html">Scarica il calcolatore offline</a>'
    html = replace_once(html, download_link, "")
    html = replace_once(html, '<meta name="description"', '<meta name="robots" content="noindex"><meta name="description"')
    for source, target in [('confronto_fornitori_guida', 'github_offline_guida'),
                           ('confronto_fornitori_sessione', 'github_offline_processo')]:
        before = 'utm_source=pugliai_lab&amp;utm_medium=referral&amp;utm_campaign=pugliai_processi_2026q4&amp;utm_content=' + source
        after = 'utm_source=github&amp;utm_medium=referral&amp;utm_campaign=pugliai_processi_2026q4&amp;utm_content=' + target
        html = replace_once(html, before, after)
    destination.write_text(html)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("destination", type=Path)
    build(parser.parse_args().destination)
