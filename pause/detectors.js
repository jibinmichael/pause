const AI_DOMAINS = new Set([
  'claude.ai','chatgpt.com','perplexity.ai','gemini.google.com',
  'chat.openai.com','poe.com','copilot.microsoft.com'
]);
const DEV_DOMAINS = new Set([
  'github.com','gitlab.com','vercel.com','railway.app',
  'stackblitz.com','codesandbox.io','codepen.io','replit.com'
]);
const SNEAKER_DOMAINS = new Set([
  'nike.com','stockx.com','goat.com','sneakernews.com',
  'sneakerfreaker.com','flightclub.com','grailed.com',
  'footlocker.com','hypebeast.com'
]);

function hostnameOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch (e) { return ''; }
}

function isDevHost(host, url) {
  if (DEV_DOMAINS.has(host)) return true;
  if (/^localhost(:|$)/.test(host)) return true;
  if (/^127\.0\.0\.1/.test(host)) return true;
  if (/^(127\.0\.0\.1|localhost):\d+/.test(url || '')) return true;
  return false;
}

async function buildContext() {
  const now = Date.now();
  const d = new Date();

  const hour = d.getHours();
  const minute = d.getMinutes();
  const dayOfWeek = d.getDay();

  let tabs = [];
  try { tabs = await chrome.tabs.query({}); } catch (e) { tabs = []; }

  const hosts = tabs.map(t => hostnameOf(t.url || ''));
  const urls  = tabs.map(t => t.url || '');
  const tabCount = tabs.length;

  const aiDomainOpen      = hosts.some(h => AI_DOMAINS.has(h));
  const devDomainOpen     = tabs.some((t, i) => isDevHost(hosts[i], urls[i]));
  const sneakerDomainOpen = hosts.some(h => SNEAKER_DOMAINS.has(h));

  let tabAgeDaysMax = 0;
  const tabsWithAccess = tabs.filter(t => t.lastAccessed);
  if (tabsWithAccess.length) {
    const oldest = Math.min(...tabsWithAccess.map(t => t.lastAccessed));
    tabAgeDaysMax = Math.floor((now - oldest) / 86400000);
  }

  let sessionStart;
  try {
    const data = await chrome.storage.local.get(['sessionStart']);
    if (data.sessionStart && (now - data.sessionStart) < 16 * 3600 * 1000) {
      sessionStart = data.sessionStart;
    } else {
      sessionStart = now;
      await chrome.storage.local.set({ sessionStart: now });
    }
  } catch (e) {
    sessionStart = now;
  }
  const sessionMinutes = Math.floor((now - sessionStart) / 60000);

  const weekdayAgo = (() => {
    if (tabAgeDaysMax === 0) return 'today';
    const past = new Date(now - tabAgeDaysMax * 86400000);
    return ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][past.getDay()];
  })();

  return {
    hour, minute, dayOfWeek,
    tabCount, tabAgeDaysMax,
    aiDomainOpen, devDomainOpen, sneakerDomainOpen,
    sessionMinutes, sessionStart,
    weekdayAgo,
    random: Math.random(),
  };
}

window.buildContext = buildContext;
