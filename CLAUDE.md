# Project context — Road to Iron Viking

Read this first. It's the full brief so any new session can pick up the project without re-asking.

## What this is

Rogier is training to finish the **Iron Viking Run** — a 42 km obstacle race with ~100 obstacles — on **Saturday 10 April 2027**. This repo holds the training plan, the content plan for a new English-language YouTube Shorts + Instagram channel documenting the journey, and the spec for an automation pipeline that turns raw phone clips into posted shorts.

The channel is not a side project — it's the accountability mechanism. Publicly promising to finish is what keeps the training going.

## Who this is for

- Rogier, Dutch, speaks Dutch in conversation but **all content and all docs in this repo are in English** (10× the audience for this genre).
- Existing fitness base: **calisthenics every Tuesday evening**, **parkour every Saturday**. Both are fixed and stay — they're already race-specific training (grip, climbing, vaulting).
- Weak link is **running**. Not a runner, doesn't enjoy plain mileage. Hence "mission runs" (see below).
- **Has ADHD.** This matters for how you write for him: short, ordered, concrete, one clear next action. Long walls of text and open-ended "you could consider…" lists don't land. Days will get skipped — the whole system is designed so that skipping breaks nothing.
- Knees and shoulders have a long history of complaints. Handle as **maintenance, not identity** — support strength, sensible progression, a simple pain rule. It is explicitly **not** the channel's story angle. Don't reintroduce it as a headline.

## Key decisions already made (don't relitigate)

1. **Mission runs, not plain mileage.** Every run has challenges along the route — pull-ups at a playground, over a wall, stair repeats, carries, bear crawls. Matches the race and makes every video visually different.
2. **Three runs a week max** (Mon / Wed / Sun). Tuesday and Saturday are already hard sessions.
3. **Start at 1.5–2 km**, grow ~0.5–1 km per week. An earlier draft proposed walk-run intervals (1 min jog / 2 min walk) — he rejected that as far too conservative. Don't go back there.
4. **Long run capped at 24–28 km**, not a full 42 km in training. Walk breaks are an explicit race strategy.
5. **Phases are counted in weeks from actual start**, never fixed calendar dates. He will start late and skip weeks; the plan must not "break".
6. **"Day X" is a sequential episode counter, not a calendar date.** Each posted day = previous + 1. A skipped day simply gets no number. Never write a days-remaining countdown; always the open phrasing "training until the Iron Viking Run in April".
7. **Hikes count as training** — including a September holiday week. Film them.
8. **Strava free tier** for tracking; screenshots are proof-of-work in videos.
9. **One fixed premise sentence opens every single video.** This is the single most important branding decision, taken from the reference channels.

## Open decisions (he still needs to answer)

- **The handle** — same name on YouTube and Instagram. Candidates: `roadtoironviking`, `ironvikingjourney`, `42kviking`, `themissionrun`.
- **Premise sentence, A or B:**
  - A: "Day X of training until I can finish a 42 kilometre obstacle race."
  - B: same + "One follow equals one pull-up" (audience-stakes mechanic, gagiegram's growth engine).

Once picked, these go into `START_HERE.md`, `content/SCRIPTS.md` and `content/CONTENT_PLAN.md`, and never change again.

## Gear status

Owned: running vest with chest phone pocket, phone mic, grip tripod. Nothing else needs buying to start.

## Files

| File | Contents |
|---|---|
| `START_HERE.md` | Remaining setup in dependency order, tomorrow-morning routine, bad-day fallbacks. His entry point. |
| `day-one.html` | Same content as a styled page — open in a browser, works offline, checkboxes persist. Published as an artifact too. |
| `TRAINING_PLAN.md` | Four phases in weeks, weekly rhythm, mission runs, knee/shoulder maintenance, monthly measurement moments. |
| `content/CONTENT_PLAN.md` | Formats, cadence, filming setup, day-counter rules, signature shot. |
| `content/SCRIPTS.md` | Day 1 script word for word, daily 3-beat template, hook bank, monthly milestone structure. |
| `content/CHANNEL_RESEARCH.md` | Analysis of the two reference accounts + genre data. |
| `automation/PIPELINE.md` | Spec for the clips → shorts → auto-post pipeline. |
| `log/TEMPLATE.md` | Daily log format. |

## Content strategy in three lines

- **Dailies** (5–7/week, 20–40 sec) are the habit engine. Most will get few views. Post anyway — engagement in this genre is a daily lottery.
- **One milestone video per month** is what actually grows the channel: before/after, stats overlay, rapid-cut montage through seasons. Structure is in `content/SCRIPTS.md`.
- **The signature shot** — 3 seconds running toward the camera, same spot and angle, every session — is what makes those montages work. It's the one daily non-negotiable.

## Reference channels (analysed, see `content/CHANNEL_RESEARCH.md`)

- **@dailyrepsguy** (Skye Mackintosh, ~260K in under a year): identical premise sentence on every post, day number first. Baseline 300–1,500 likes with outliers up to 233K.
- **@gagiegram** (Gage Nelson, ~2M): "1 follow = 1 mile". His recap structure — promise → goal → self-deprecating conflict → premise → proof → gamified CTA — is our monthly template.

## Working conventions

- Docs in English, conversation in Dutch.
- Keep documents short and scannable. Tables and ordered lists over paragraphs.
- Be direct about trade-offs and give a recommendation rather than a menu of options.
- The automation pipeline lives in a **separate existing Claude Code video-edit project**; this repo only specifies what it should do.
