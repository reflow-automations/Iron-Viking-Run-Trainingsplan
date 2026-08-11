# Automation-pipeline — van ruwe clips naar geposte shorts

Doel: Rogier levert alleen ruwe clips aan; de rest is automatisch. Dit document is de spec voor het (bestaande) Claude Code video-edit project, zodat dat project precies weet wat het moet bouwen/doen.

## De keten

```
telefoon ──sync──► inbox/           (ruwe clips per dag)
                     │
                     ▼
              [Claude Code edit-project]
              1. transcriberen (Whisper) van alle clips
              2. clips selecteren + knippen tot short (9:16, 20–60 sec)
              3. ondertitels branden (gesproken tekst = captions)
              4. "Dag X van 242" opener/overlay op basis van de datum
              5. metadata genereren: titel, beschrijving, hashtags
                     │
                     ├──► output/YYYY-MM-DD/short-*.mp4 + metadata.json
                     │
                     ▼
              [posten]
              • YouTube: upload via YouTube Data API (eigen script, bestaat al als
                Claude Code project)
              • Instagram: via het social-bundle account (20 posts/maand gratis tier)
                     │
                     ▼
              [bonus] transcript → taakjes eruit halen
              Alles wat tijdens het rennen wordt ingesproken als "ik moet nog…" /
              "taakje: …" wordt een taak (bijv. in ClickUp gezet).
```

## Afspraken die de pipeline simpel houden

- **Dagnummer is afleidbaar uit de datum:** dag 1 = 12 augustus 2026, racedag = dag 242 (10 april 2027). Geen handmatige nummering: `dag = datum − 2026-08-11`.
- **Bestandsnamen doen er niet toe** — de opnamedatum uit de metadata van de clip is leidend.
- **Gesproken woord stuurt de edit.** Zeg tijdens het filmen gewoon "dit is de opener" of "clip dit" — het transcript is voor de editor de beste selectiehint.
- **Trigger-woorden voor taken:** alles na "taakje" of "ik moet nog" in het transcript wordt een to-do.
- **Niks is live tot het gepost is door de pipeline** — geen handmatige uploads tussendoor, anders raakt de dag-nummering en de 20/maand-verdeling in de war.

## Nog te regelen (checklist)

- [ ] Cloud-sync van telefoon naar `inbox/` (bijv. gedeelde map) zodat overzetten geen handeling is
- [ ] YouTube-kanaal aanmaken + API-credentials (OAuth) voor het uploadscript
- [ ] Nieuw Instagram-account aanmaken + koppelen aan social-bundle account
- [ ] Zelfde handle claimen op YouTube én Instagram
- [ ] Edit-project de "Dag X van 242"-overlay en captions-stijl geven (één vaste stijl, herkenbaarheid > variatie)
- [ ] Verdeling bepalen: welke shorts naar de 20 gratis Instagram-slots per maand gaan (beste 5 per week)
- [ ] Taken-integratie: transcript-to-do's naar ClickUp
