# Confronto preventivi AI per PMI

PugliAI Lab aiuta chi acquista un progetto di automazione a confrontare due offerte sullo stesso volume di lavoro. Calcola il costo del primo anno e la spesa mensile di gestione per ciascun fornitore. Gli importi inseriti vengono elaborati nel browser.

[Apri il calcolatore](https://pugliai-lab.onrender.com/) · [Scarica l’edizione offline](https://github.com/gunnit/pugliai-lab/releases/latest/download/Confronto-preventivi-AI.html)

## Un esempio di scelta

Una PMI confronta due proposte per gestire **300 pratiche al mese**. Stima il costo interno della persona che verifica le eccezioni a **32 € l’ora**. Gli importi dell’esempio sono fittizi, IVA esclusa.

| Voce | Proposta A | Proposta B |
|---|---:|---:|
| Avvio e integrazione | 4.800 € | 2.000 € |
| Canone e assistenza al mese | 180 € | 390 € |
| Costo per pratica | 0,35 € | 0,08 € |
| Verifica interna al mese | 4 ore | 8 ore |
| **Gestione mensile** | **413 €** | **670 €** |
| **Totale a 12 mesi** | **9.756 €** | **10.040 €** |

La proposta B costa 2.800 € in meno all’avvio. La proposta A recupera 257 € al mese sui costi di gestione. Con volumi e tariffe costanti, A diventa più economica all’undicesimo mese e costa 284 € in meno a fine anno. Chiedi al fornitore quali attività conteggia come pratiche, come fattura le ripetizioni e chi gestisce le eccezioni.

## Come usarlo

1. Inserisci il volume mensile e il costo orario interno comuni alle due offerte.
2. Riporta i costi di avvio, i canoni, il costo unitario e le ore di verifica. Inserisci zero per una voce gratuita.
3. Confronta gli importi annuali, poi varia il volume e le ore di verifica per vedere quanto pesa ciascuna ipotesi.
4. Usa **Stampa confronto** per stampare i risultati o salvarli in PDF. Per l’uso offline, apri il file HTML scaricato in un browser con JavaScript attivo.

Per ciascuna proposta, il calcolo è **avvio + 12 × (canone mensile + pratiche mensili × costo per pratica + ore mensili di verifica × costo orario interno)**.

PugliAI S.r.l. pubblica questo strumento. La guida ai fornitori aiuta a valutare integrazioni, responsabilità e referenze insieme ai costi. [Guida ai fornitori AI](https://pugliai.com/guida-ai/migliori-aziende-ai-italia-2025.html?utm_source=github&utm_medium=referral&utm_campaign=pugliai_processi_2026q4&utm_content=github_readme_guida)
