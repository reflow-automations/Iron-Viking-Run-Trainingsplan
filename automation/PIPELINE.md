# Automation Pipeline — from raw clips to posted shorts

Goal: Rogier only supplies raw clips; everything else is automatic. This document is the spec for the (existing) Claude Code video-edit project.

## The chain

```
phone ──cloud sync──► inbox/          (raw clips, per day)
                        │
                        ▼
                 [Claude Code edit project]
                 1. transcribe every clip (Whisper)
                 2. select + cut into shorts (9:16, 20–60 sec)
                 3. burn in captions (spoken word = captions)
                 4. "Day X" opener/overlay (see day counter below)
                 5. optional Strava screenshot as proof overlay/end card
                 6. generate metadata: title, description, hashtags (English)
                        │
                        ├──► output/day-XXX/short-*.mp4 + metadata.json
                        │
                        ▼
                 [posting]
                 • YouTube: upload via YouTube Data API (own script, exists as
                   Claude Code project)
                 • Instagram: via the social-bundle account (20 posts/month free tier)
                        │
                        ▼
                 [bonus] transcript → task extraction
                 Anything spoken mid-run like "task: …" / "I still need to…"
                 becomes a to-do (e.g. pushed to ClickUp).
```

## Day counter (sequential, NOT date-based)

Days will get skipped — vacation, sick days, life. That must never break the numbering.

- The pipeline keeps a state file, e.g. `state.json`: `{ "last_day": 37 }`.
- Every day that produces at least one posted video: `day = last_day + 1`, then update the state file.
- A calendar day with no footage simply doesn't get a number. No gaps, no math on dates, nothing to correct.
- Scripts/overlays always use the open phrasing: **"Day X of training for the Iron Viking Run in April"** — never a computed days-remaining countdown.
- Multiple shorts from the same session share the same day number.

## Conventions that keep the pipeline simple

- **File names don't matter** — recording timestamps from clip metadata determine grouping into a "session".
- **Spoken word drives the edit.** Say "this is the opener" or "clip this" while filming — the transcript is the editor's best selection hint.
- **Task trigger words:** anything after "task" / "I still need to" in the transcript becomes a to-do.
- **Nothing goes live except through the pipeline** — no manual uploads in between, or the day counter and the 20/month Instagram budget get out of sync.
- **Everything output in English:** captions, titles, descriptions, hashtags.

## Setup checklist (setup week: Aug 11–23)

- [ ] Cloud sync phone → `inbox/` (shared folder) so transferring isn't a manual step
- [ ] Download Strava, test-record a walk
- [ ] Buy running vest with chest phone pocket + mini tripod/clip mount + foam windscreen
- [ ] Check handle availability, then create YouTube channel + new Instagram account (same handle)
- [ ] YouTube API credentials (OAuth) for the upload script
- [ ] Connect Instagram to the social-bundle account
- [ ] Give the edit project the "Day X" overlay + one fixed caption style (recognizability > variety)
- [ ] Implement `state.json` day counter
- [ ] Task extraction → ClickUp
- [ ] Watch-and-steal analysis of reference channels → `content/CHANNEL_RESEARCH.md`
