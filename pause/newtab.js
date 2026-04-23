function resolveTemplate(str, ctx) {
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    switch (key) {
      case 'tabs':         return ctx.tabCount;
      case 'hour':         return ctx.hour;
      case 'timeString':   return formatTime(ctx.hour, ctx.minute);
      case 'weekday':      return ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][ctx.dayOfWeek];
      case 'weekdayAgo':   return ctx.weekdayAgo || 'earlier';
      case 'daysOld':      return ctx.tabAgeDaysMax;
      case 'hoursSession': return Math.max(1, Math.floor(ctx.sessionMinutes / 60));
      default:             return '';
    }
  });
}

function formatTime(h, m) {
  const mm = String(m).padStart(2, '0');
  if (h === 0)  return `12:${mm} am`;
  if (h < 12)   return `${h}:${mm} am`;
  if (h === 12) return `12:${mm} pm`;
  return `${h - 12}:${mm} pm`;
}

async function loadMemory() {
  try {
    const data = await chrome.storage.local.get(['sceneMemory']);
    return data.sceneMemory || {};
  } catch (e) { return {}; }
}
async function saveMemory(m) {
  try { await chrome.storage.local.set({ sceneMemory: m }); } catch (e) {}
}

function pickScene(ctx, memory) {
  const now = Date.now();
  const scored = window.SCENES
    .filter(scene => {
      try { return scene.when(ctx); } catch (e) { return false; }
    })
    .map(scene => {
      const lastSeen = memory[scene.id]?.lastSeen;
      let mult = 1;
      if (lastSeen) {
        const hrsAgo = (now - lastSeen) / 3600000;
        if (hrsAgo < 2)       mult *= 0.05;
        else if (hrsAgo < 24) mult *= 0.4;
        else if (hrsAgo < 72) mult *= 0.8;
      } else {
        mult *= 1.3;
      }
      return { scene, final: mult, tier: scene.tier ?? 2 };
    })
    .filter(s => s.final > 0);

  if (!scored.length) {
    return window.SCENES.find(s => s.id === 'idle_new_tab') || window.SCENES[0];
  }

  const minTier = Math.min(...scored.map(s => s.tier));
  const inTier = scored.filter(s => s.tier === minTier);
  inTier.sort((a, b) => b.final - a.final);
  const top = inTier[0];
  const candidates = inTier.filter(s => s.final >= top.final * 0.8);
  return candidates[Math.floor(Math.random() * candidates.length)].scene;
}

function composeLine(scene, ctx, memory) {
  const now = Date.now();
  const fiveDays = 5 * 24 * 60 * 60 * 1000;
  const recentCombos = (memory[scene.id]?.combos || [])
    .filter(c => now - c.ts < fiveDays)
    .map(c => c.key);
  const recentSet = new Set(recentCombos);

  const all = [];
  for (let t = 0; t < scene.titles.length; t++) {
    for (let s = 0; s < scene.subs.length; s++) {
      all.push({ t, s, key: `${t}:${s}` });
    }
  }
  const fresh = all.filter(c => !recentSet.has(c.key));
  const pool = fresh.length ? fresh : all;
  const pick = pool[Math.floor(Math.random() * pool.length)];

  return {
    title:    resolveTemplate(scene.titles[pick.t], ctx),
    sub:      resolveTemplate(scene.subs[pick.s], ctx),
    comboKey: pick.key,
  };
}

function renderSprite(container, pattern, px, color) {
  const cols = pattern[0].length, rows = pattern.length;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', cols * px);
  svg.setAttribute('height', rows * px);
  svg.setAttribute('shape-rendering', 'crispEdges');
  svg.style.display = 'block';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (pattern[y][x] === '#') {
        const r = document.createElementNS(svgNS, 'rect');
        r.setAttribute('x', x * px);
        r.setAttribute('y', y * px);
        r.setAttribute('width', px);
        r.setAttribute('height', px);
        r.setAttribute('fill', color);
        svg.appendChild(r);
      }
    }
  }
  container.appendChild(svg);
}

async function render() {
  let ctx;
  try { ctx = await window.buildContext(); }
  catch (e) { ctx = { hour: 12, minute: 0, dayOfWeek: 1, tabCount: 1, tabAgeDaysMax: 0,
                      sessionMinutes: 0, random: Math.random(), weekdayAgo: 'earlier' }; }

  const memory = await loadMemory();
  const scene = pickScene(ctx, memory);
  const composed = composeLine(scene, ctx, memory);

  const spriteRow = document.getElementById('spriteRow');
  spriteRow.innerHTML = '';
  // Pick a random sprite from the scene's sprites array (or fall back to .sprite singular for backward compat)
  const spriteList = scene.sprites || (scene.sprite ? [scene.sprite] : []);
  const spriteKey = spriteList[Math.floor(Math.random() * spriteList.length)] || 'eye-neutral';
  const pattern = window.SPRITES[spriteKey];
  const color = window.COLORS[spriteKey] || '#0a0a0a';
  if (pattern) {
    if (scene.layout === 'single') {
      renderSprite(spriteRow, pattern, 5, color);
    } else {
      renderSprite(spriteRow, pattern, 4, color);
      renderSprite(spriteRow, pattern, 4, color);
    }
  }

  document.getElementById('title').textContent = composed.title;
  document.getElementById('sub').textContent = composed.sub;

  const now = Date.now();
  const sceneMem = memory[scene.id] || {};
  memory[scene.id] = {
    lastSeen: now,
    firedCount: (sceneMem.firedCount || 0) + 1,
    combos: [
      ...(sceneMem.combos || []).filter(c => now - c.ts < 5 * 24 * 60 * 60 * 1000),
      { key: composed.comboKey, ts: now }
    ],
  };
  await saveMemory(memory);
}

document.addEventListener('DOMContentLoaded', render);
