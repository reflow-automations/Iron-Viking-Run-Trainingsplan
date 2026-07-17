# THE NOON LEAGUE 🏆

A retro Pokémon Gym-League style recap of the first 5 dates. Pure HTML/CSS/JS,
no build step, no dependencies, no copyrighted assets.

## The game

5 real gym battles, one per date. Each gym has a "Gym Leader ROGIER" (typed,
e.g. BILLIARDS-type, ARCADE-type...) with his own HP bar, and NOON gets her
own HP bar and level too. Per gym:

- 3 moves to choose from, in any order (the first is the glowing "signature"
  move). Using all 3 clears the gym.
- NOON always moves first and always lands her hit — she's simply better.
- Gym Leader ROGIER answers with a scripted comeback after each of her moves,
  chipping a little of her HP so it's a real Pokémon-style back-and-forth —
  he just never chips enough to matter.
- Clearing all 3 moves awards a badge. After 5 gyms: the Badge Case /
  League Champion screen, with a teaser for the next date.

## Add a new date/gym

Open `game.js` and append one object to the `GYMS` array at the top: an
`intro` (2 typed lines), a `badge` name, exactly 3 `moves` ({label, her, his}),
and 3 matching `counters` (Rogier's own comeback lines). Everything else
(HP bars, badge case, flow) just works with the new entry.

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080/
```

## Deploy (Vercel)

Framework preset **Other**, no build command. `vercel.json` handles clean
routing.

## Files
- `index.html` / `style.css` / `game.js` — the whole game (title, battle, badge case)
- `rogier.png` / `trainer.png` — character sprites (shared with the other Datingmon games)
- `vercel.json` — SPA-style rewrite
