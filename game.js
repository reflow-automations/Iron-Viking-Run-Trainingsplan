/* ============================================================
   THE NOON LEAGUE  ·  ROGIER Studios 2026
   5 real gym battles recapping the first 5 dates. Vanilla JS.
   Add a 6th date later by appending one object to GYMS below.
   ============================================================ */
(() => {
  "use strict";

  const PLAYER = "NOON";
  const FOE = "ROGIER";
  const FOE_MAX = 100;
  const PLAYER_MAX = 100;

  /* ============================================================
     ★ THE 5 GYMS ★ — add a new gym by appending an object here.
     Each gym has an intro (typed lines) and exactly 3 moves.
     Move order is the player's choice; using all 3 clears the gym.
     The first move is the "signature" (glowing) move.
     Each move: { label, her, his } — her/his are typed dialogue
     lines (her move, then Rogier's reaction + his HP drop).
     `counters` are ROGIER's own scripted comebacks (one per her
     move, matched by order used) — he chips a little of HER HP
     each time, so it's a real back-and-forth. She still wins every
     gym: she moves first and always lands all 3 of her hits.
     ============================================================ */
  const GYMS = [
    {
      icon: "🎱", title: "WESTFIELD", type: "BILLIARDS-type",
      intro: [
        PLAYER + " and " + FOE + " racked up the table at O'Leary's...",
        "Then wandered Westfield just to see what was there.",
      ],
      badge: "MALL BADGE",
      moves: [
        { label: "TRICK SHOT", her: NAME_LINE("TRICK SHOT"), his: "Bank shot, corner pocket — direct hit! " + FOE + " never stood a chance. 🎱" },
        { label: "RACK 'EM UP", her: NAME_LINE("RACK 'EM UP"), his: FOE + " didn't see that combo coming." },
        { label: "WESTFIELD WALK", her: NAME_LINE("WESTFIELD WALK"), his: "Just window-shopping and side comments — somehow still a hit. 🛍️" },
      ],
      counters: [
        FOE + " used CONFIDENT BANK SHOT! Clipped her for a bit of pride damage. 😏",
        FOE + " used SIDE COMMENTARY! A little too on point.",
        FOE + " used ONE LAST TRICK SHOT! Almost saved the game. Almost.",
      ],
    },
    {
      icon: "💃", title: "THE ARCADE", type: "ARCADE-type",
      intro: [
        "A whole museum of retro games in Zoetermeer... plus bubble tea. 🧋",
        PLAYER + " found the dance machine and did NOT hold back.",
      ],
      badge: "ARCADE BADGE",
      moves: [
        { label: "AIR HOCKEY SMASH", her: NAME_LINE("AIR HOCKEY SMASH"), his: "A merciless win. " + FOE + " is still looking for the puck. 🏒" },
        { label: "DANCE MACHINE", her: NAME_LINE("DANCE MACHINE"), his: "Perfect streak — half the museum was watching. 💃" },
        { label: "TEKKEN COMBO", her: NAME_LINE("TEKKEN COMBO"), his: "Flawless victory. " + FOE + " never saw the buttons coming. 🥋" },
      ],
      counters: [
        FOE + " used MARIO KART VICTORY! First place. (" + PLAYER + " did NOT enjoy that one. 🏁)",
        FOE + " used BUBBLE TEA BREAK! Sneaky recovery move. 🧋",
        FOE + " used REMATCH REQUEST! Denied. But he had to try.",
      ],
    },
    {
      icon: "🍿", title: "MOVIE NIGHT", type: "COZY-type",
      intro: [
        "No plans, just a couch, a movie, and nowhere to be.",
        "Somewhere around minute 20, nobody was watching the movie anymore.",
      ],
      badge: "COZY BADGE",
      moves: [
        { label: "CUDDLE UP", her: NAME_LINE("CUDDLE UP"), his: "Effective immediately. " + FOE + " forgot the movie was even on. 🥰" },
        { label: "MOVIE PICK", her: NAME_LINE("MOVIE PICK"), his: "Nobody remembers the plot. 🍿" },
        { label: "BLANKET FORT", her: NAME_LINE("BLANKET FORT"), his: "Maximum comfort achieved." },
      ],
      counters: [
        FOE + " used ARM AROUND SHOULDER! Smooth. Very smooth.",
        FOE + " used AI ART! " + PLAYER + " with Cubone, Eevee & Vulpix — instant smile, every time. 🎨",
        FOE + " used FINAL CUDDLE! Movie's over — nobody noticed.",
      ],
    },
    {
      // Role-reversed gym: ROGIER gives the massage, NOON wins by receiving it.
      // His HP bar = his composure, melting a little more every round. He'd
      // call this one a win for himself too — and he's not wrong.
      icon: "♨️", title: "RECOVERY DAY", type: "ZEN-type",
      intro: [
        FOE + " showed up with warm massage oil and zero agenda.",
        "A gym where " + PLAYER + " wins by doing... absolutely nothing. Her specialty unlocked.",
      ],
      badge: "ZEN BADGE",
      moves: [
        { label: "ACCEPT THE MASSAGE", her: PLAYER + " used ACCEPT THE MASSAGE! Best move of the week.", his: FOE + " answered with AROMATHERAPY OIL — and it's HIS composure bar that's dropping. ♨️" },
        { label: "FULL RELAXATION", her: PLAYER + " used FULL RELAXATION! Officially horizontal.", his: "The more she melts, the harder " + FOE + " falls. It's super effective! 😌" },
        { label: "ZEN MODE", her: PLAYER + " used ZEN MODE! Not moving for 20 minutes.", his: FOE + "'s composure: gone. Zero complaints from his side though." },
      ],
      counters: [
        FOE + " used MORE OIL! " + PLAYER + " takes no damage. Only comfort.",
        FOE + " used SHOULDER FOCUS! Direct hit on a knot she didn't know she had.",
        FOE + " used \"HONESTLY? I WON THIS ROUND.\" ...He might have a point. 😏",
      ],
    },
    {
      icon: "🍣", title: "TONIGHT", type: "SUSHI-type",
      intro: [
        "Sushi on the plein in Leiden, just the two of them.",
        "Then back to the couch — because some things are becoming routine now. (The good kind.)",
      ],
      badge: "SUSHI BADGE",
      moves: [
        { label: "SHARE A ROLL", her: NAME_LINE("SHARE A ROLL"), his: "Critical hit, obviously. 🍣" },
        { label: "PLEIN VIBES", her: NAME_LINE("PLEIN VIBES"), his: "Leiden at night — unbeatable combo. 🌆" },
        { label: "COUCH, ROUND 2", her: NAME_LINE("COUCH, ROUND 2"), his: "Some things are becoming routine now. (The good kind.) 🛋️" },
      ],
      counters: [
        FOE + " used EXTRA WASABI DARE! Regretted it immediately. 🥲",
        FOE + " used PLEIN PEOPLE-WATCHING! Made up backstories together.",
        FOE + " used \"ONE MORE EPISODE\"! It's never just one.",
      ],
    },
  ];
  function NAME_LINE(move) { return PLAYER + " used " + move + "!"; }
  // Revealed once all 5 badges are in the case — the real, physical prize
  // ROGIER hands over the moment she reads this. 🦴
  const PRIZE_LINES = [
    "A wild CUBONE appeared... 🦴",
    "3D-printed & hand-painted by " + FOE + ", just for " + PLAYER + ".",
    "It's real. Ask him for it. RIGHT NOW. 💝",
  ];
  /* ============================================================ */

  const $ = (s) => document.querySelector(s);
  const screen = $("#screen");
  const states = { title: $("#state-title"), battle: $("#state-battle"), trophy: $("#state-trophy") };
  const dialogue = $("#dialogue");
  const dialogueText = $("#dialogue-text");
  const cursor = $("#dialogue-cursor");
  const flash = $("#flash");
  const fade = $("#fade");
  const sparkles = $("#sparkles");
  const btnStart = $("#btn-start");
  const btnAgain = $("#btn-again");
  const soundToggle = $("#sound-toggle");
  const menu = $("#menu");
  const gymTag = $("#gym-tag");
  const foeTypeEl = $("#foe-type");
  const hpFoe = $("#hp-foe");
  const hpPlayer = $("#hp-player");
  const spriteFoe = $("#sprite-foe");
  const spritePlayer = $("#sprite-player");

  $("#player-name-box").textContent = PLAYER;

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, reduced ? Math.min(ms, 60) : ms));
  const rand = (a, b) => Math.round(a + Math.random() * (b - a));

  /* ---------- Audio ---------- */
  let actx = null, master = null;
  let muted = localStorage.getItem("nl_muted") === "1";
  soundToggle.classList.toggle("is-muted", muted);

  function ensureAudio() {
    if (!actx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        actx = new AC();
        master = actx.createGain();
        master.gain.value = muted ? 0 : 1;
        master.connect(actx.destination);
      }
    }
    if (actx && actx.state === "suspended") actx.resume();
  }
  function noteAt(freq, dur, type, vol, at) {
    if (!actx) return;
    const o = actx.createOscillator();
    const g = actx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(vol, at + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(master || actx.destination);
    o.start(at); o.stop(at + dur + 0.02);
  }
  function tone(freq, dur, type = "square", vol = 0.04, when = 0) {
    if (muted || !actx) return;
    noteAt(freq, dur, type, vol, actx.currentTime + when);
  }
  function sfx(kind) {
    if (muted) return;
    ensureAudio();
    switch (kind) {
      case "type":   tone(640, 0.02, "square", 0.010); break;
      case "select": tone(880, 0.07, "square", 0.05); break;
      case "hit":    tone(150, 0.16, "sawtooth", 0.055); tone(90, 0.18, "square", 0.035); break;
      case "badge":  tone(700, 0.10, "square", 0.05); break;
    }
  }
  function jingle(notes) {
    if (muted) return;
    ensureAudio();
    (notes || [523, 659, 784, 1047, 1319]).forEach((f, i) => tone(f, 0.16, "square", 0.05, i * 0.11));
  }
  function playVictory() {
    if (muted) return;
    ensureAudio();
    if (!actx) return;
    const t = actx.currentTime + 0.05, s = 0.15;
    const song = [
      [784, 0, 0.5], [784, 0.5, 0.5], [784, 1, 0.5],
      [1047, 1.5, 1.5], [1319, 3, 1], [1568, 4, 1.5],
      [1319, 5.5, 0.5], [1568, 6, 0.5], [2093, 6.5, 2],
    ];
    song.forEach(([f, b, d]) => {
      noteAt(f, s * d * 1.5, "square", 0.05, t + b * s);
      noteAt(f / 2, s * d * 1.5, "triangle", 0.045, t + b * s);
    });
    [1047, 1319, 1568, 2093].forEach((f, i) => noteAt(f, 0.11, "square", 0.035, t + (8.5 + i * 0.45) * s));
  }

  soundToggle.addEventListener("click", () => {
    muted = !muted;
    localStorage.setItem("nl_muted", muted ? "1" : "0");
    soundToggle.classList.toggle("is-muted", muted);
    if (muted) {
      if (actx && master) {
        const now = actx.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.setValueAtTime(master.gain.value, now);
        master.gain.linearRampToValueAtTime(0.0001, now + 0.02);
      }
    } else {
      ensureAudio();
      if (actx && master) {
        const now = actx.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.setValueAtTime(1, now);
      }
      tone(880, 0.08);
    }
  });

  /* ---------- State switching ---------- */
  function gotoState(name) {
    Object.entries(states).forEach(([key, el]) => {
      const active = key === name;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", active ? "false" : "true");
    });
  }

  /* ---------- FX ---------- */
  function shake() {
    screen.classList.remove("is-shaking");
    void screen.offsetWidth;
    screen.classList.add("is-shaking");
    setTimeout(() => screen.classList.remove("is-shaking"), 450);
  }
  function doFlash() {
    flash.classList.remove("is-on");
    void flash.offsetWidth;
    flash.classList.add("is-on");
    setTimeout(() => flash.classList.remove("is-on"), 320);
  }
  const fadeOut = () => { fade.classList.add("is-on"); return sleep(580); };
  const fadeIn  = () => { fade.classList.remove("is-on"); return sleep(580); };

  function burstSparkles(n = 18, hearts = false) {
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "spark" + (hearts && i % 2 ? " heart" : "");
      s.style.left = Math.random() * 90 + 5 + "%";
      s.style.bottom = Math.random() * 30 + "%";
      s.style.animationDelay = Math.random() * 0.5 + "s";
      sparkles.appendChild(s);
      setTimeout(() => s.remove(), 1600);
    }
  }

  /* ---------- HP ---------- */
  function renderFoeHP(hp) {
    const pct = Math.max(0, (hp / FOE_MAX) * 100);
    hpFoe.style.width = pct + "%";
    hpFoe.classList.toggle("is-mid", pct <= 66 && pct > 33);
    hpFoe.classList.toggle("is-low", pct <= 33);
  }
  function renderPlayerHP(hp) {
    const pct = Math.max(0, (hp / PLAYER_MAX) * 100);
    hpPlayer.style.width = pct + "%";
    hpPlayer.classList.toggle("is-mid", pct <= 66 && pct > 33);
    hpPlayer.classList.toggle("is-low", pct <= 33);
  }
  function foeHit() {
    spriteFoe.classList.remove("is-hit");
    void spriteFoe.offsetWidth;
    spriteFoe.classList.add("is-hit");
    setTimeout(() => spriteFoe.classList.remove("is-hit"), 800);
    doFlash();
    sfx("hit");
  }
  function playerHit() {
    spritePlayer.classList.remove("is-hit");
    void spritePlayer.offsetWidth;
    spritePlayer.classList.add("is-hit");
    setTimeout(() => spritePlayer.classList.remove("is-hit"), 800);
    sfx("hit");
  }
  function playerAttack() {
    spritePlayer.classList.remove("is-attacking");
    void spritePlayer.offsetWidth;
    spritePlayer.classList.add("is-attacking");
    setTimeout(() => spritePlayer.classList.remove("is-attacking"), 480);
  }
  function foeCounterAttack() {
    spriteFoe.classList.remove("is-countering");
    void spriteFoe.offsetWidth;
    spriteFoe.classList.add("is-countering");
    setTimeout(() => spriteFoe.classList.remove("is-countering"), 480);
  }

  /* ---------- Typewriter + tap-to-advance ---------- */
  let typing = false, skip = false, tapResolver = null;
  function onDialogueTap() {
    if (typing) skip = true;
    else if (tapResolver) { const r = tapResolver; tapResolver = null; r(); }
  }
  dialogue.addEventListener("click", onDialogueTap);
  const waitTap = () => new Promise((res) => { tapResolver = res; });

  async function typeText(text) {
    typing = true; skip = false;
    dialogueText.textContent = "";
    cursor.classList.remove("is-shown");
    for (let i = 0; i < text.length; i++) {
      if (skip) { dialogueText.textContent = text; break; }
      dialogueText.textContent += text[i];
      if (i % 2 === 0 && text[i] !== " ") sfx("type");
      await sleep(16);
    }
    typing = false;
    cursor.classList.add("is-shown");
  }
  async function say(text) { await typeText(text); await waitTap(); }

  /* ---------- Menu ---------- */
  function showMenu() { menu.classList.add("is-shown"); menu.setAttribute("aria-hidden", "false"); }
  function hideMenu() { menu.classList.remove("is-shown"); menu.setAttribute("aria-hidden", "true"); }

  function buildMenu(gym, onPick) {
    menu.innerHTML = "";
    gym.moves.forEach((mv, i) => {
      const b = document.createElement("button");
      b.className = "btn move-btn " + (i === 0 ? "is-signature" : "is-flavor");
      b.dataset.idx = i;
      b.innerHTML = '<span>' + mv.label + '</span><span class="move-btn__check" aria-hidden="true"></span>';
      b.addEventListener("click", () => {
        if (b.disabled) return;
        onPick(i, b);
      });
      menu.appendChild(b);
    });
  }

  /* ---------- Gym battles ---------- */
  let gymIdx = 0;
  const wonBadges = [];

  async function playGym(idx) {
    const gym = GYMS[idx];
    let foeHP = FOE_MAX;
    let playerHP = PLAYER_MAX;
    let usedCount = 0;

    gymTag.textContent = "GYM " + (idx + 1) + " / " + GYMS.length + " · " + gym.title;
    foeTypeEl.textContent = gym.type;
    spriteFoe.className = "sprite sprite--foe is-entering";
    spritePlayer.className = "sprite sprite--player is-entering";
    renderFoeHP(FOE_MAX);
    renderPlayerHP(PLAYER_MAX);
    hideMenu();

    gotoState("battle");
    await fadeIn();
    setTimeout(() => {
      spriteFoe.classList.remove("is-entering");
      spritePlayer.classList.remove("is-entering");
    }, 750);

    for (const line of gym.intro) await say(line);
    await say("Choose your move, " + PLAYER + "! (" + PLAYER + " moves first — she's got this.)");

    await new Promise((resolveGym) => {
      buildMenu(gym, async (i, btn) => {
        hideMenu();
        const mv = gym.moves[i];

        // her move lands first — she always hits
        playerAttack();
        await say(mv.her);
        usedCount++;
        foeHP = Math.max(0, Math.round(FOE_MAX * (1 - usedCount / gym.moves.length)));
        foeHit();
        renderFoeHP(foeHP);
        burstSparkles(usedCount >= gym.moves.length ? 20 : 8, true);
        await say(mv.his);
        btn.disabled = true;
        btn.querySelector(".move-btn__check").textContent = "✓";

        // then Gym Leader ROGIER's scripted comeback — a real Pokémon-style
        // exchange, chipping a little of her HP, but never enough to matter
        foeCounterAttack();
        await say(gym.counters[usedCount - 1]);
        const dmg = rand(8, 14);
        playerHP = Math.max(10, playerHP - dmg);
        playerHit();
        renderPlayerHP(playerHP);

        if (usedCount >= gym.moves.length) {
          resolveGym();
        } else {
          showMenu();
        }
      });
      showMenu();
    });

    spriteFoe.classList.add("is-happy");
    jingle([659, 784, 988, 1319]);
    await sleep(400);
    await say("GYM LEADER " + FOE + " has nothing left! " + PLAYER + " earned the " + gym.badge + "! 🏅");
    sfx("badge");
    wonBadges.push({ icon: gym.icon, name: gym.badge });

    await fadeOut();
    if (idx + 1 < GYMS.length) {
      await playGym(idx + 1);
    } else {
      await showTrophy();
    }
  }

  async function showTrophy() {
    const box = $("#trophy-badges");
    const prizeEl = $("#trophy-next");
    box.innerHTML = "";
    prizeEl.textContent = "Unlocking...";
    gotoState("trophy");
    playVictory();
    burstSparkles(24, true);
    await fadeIn();

    for (const b of wonBadges) {
      const el = document.createElement("div");
      el.className = "trophy__badge";
      el.textContent = b.icon;
      el.title = b.name;
      box.appendChild(el);
      requestAnimationFrame(() => el.classList.add("is-shown"));
      sfx("badge");
      await sleep(220);
    }

    // the real prize reveal — line by line, ending on "ask him for it"
    await sleep(600);
    prizeEl.textContent = "";
    for (const line of PRIZE_LINES) {
      const p = document.createElement("span");
      p.className = "trophy__prize-line";
      p.textContent = line;
      prizeEl.appendChild(p);
      jingle([784, 988, 1319]);
      burstSparkles(8, true);
      await sleep(1100);
    }
  }

  btnAgain.addEventListener("click", async (e) => {
    e.stopPropagation();
    sfx("select");
    gymIdx = 0;
    wonBadges.length = 0;
    await fadeOut();
    gotoState("title");
    await fadeIn();
  });

  btnStart.addEventListener("click", () => {
    ensureAudio();
    sfx("select");
    shake();
    doFlash();
    setTimeout(() => playGym(0), 320);
  });

  /* ---------- init ---------- */
  gotoState("title");
})();
