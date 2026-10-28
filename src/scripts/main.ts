const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ---------- Reveals: fade-up, brush wipes, image curtains ---------- */
if (!reduced) {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal],[data-wipe],[data-clip]');
  // A fully clipped element never intersects, so clipped ones are triggered by their parent.
  const triggers = new Map<Element, HTMLElement[]>();
  els.forEach((el) => {
    el.style.setProperty('--d', `${el.dataset.reveal || el.dataset.delay || 0}ms`);
    const clipped = 'wipe' in el.dataset || 'clip' in el.dataset;
    const trigger = clipped && el.parentElement ? el.parentElement : el;
    triggers.set(trigger, [...(triggers.get(trigger) ?? []), el]);
  });
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        triggers.get(e.target)?.forEach((el) => el.classList.add('is-in'));
        io.unobserve(e.target);
      }),
    { threshold: 0.1, rootMargin: '0px 0px -4% 0px' },
  );
  triggers.forEach((_, t) => io.observe(t));
}

/* ---------- Magnetic buttons: transition-smoothed, not per-frame ---------- */
if (!reduced && fine) {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = clamp((e.clientX - (r.left + r.width / 2)) * 0.22, -8, 8);
      const y = clamp((e.clientY - (r.top + r.height / 2)) * 0.3, -6, 6);
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    el.addEventListener('pointerleave', () => (el.style.transform = ''));
  });
}

/* ---------- Single rAF loop: only runs while something is moving ---------- */
const cursor = document.getElementById('cursor');
const label = cursor?.querySelector<HTMLElement>('[data-dot] > span') ?? null;
const bar = document.getElementById('progress');
const ticker = document.querySelector<HTMLElement>('.anim-ticker');

type Layer = { el: HTMLElement; depth: number; speed: number; host: Element };
const layers: Layer[] = [];
const visible = new Set<Layer>();
if (!reduced) {
  const lio = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        const l = layers.find((x) => x.el === e.target);
        if (!l) return;
        e.isIntersecting ? visible.add(l) : visible.delete(l);
      }),
    { rootMargin: '15% 0px' },
  );
  document.querySelectorAll<HTMLElement>('[data-depth],[data-speed]').forEach((el) => {
    const l = { el, depth: Number(el.dataset.depth ?? 0), speed: Number(el.dataset.speed ?? 0), host: el.closest('section,header') ?? el };
    layers.push(l);
    lio.observe(el);
  });
}

let raf = 0;
const schedule = () => { if (!raf) raf = requestAnimationFrame(frame); };

let mx = 0, my = 0, cx = 0, cy = 0; // mouse target / current, -1..1
let px = -200, py = -200, tx = -200, ty = -200; // cursor current / target (px)
let lastY = scrollY, vel = 0;

function frame() {
  raf = 0;
  let active = false;

  const y = scrollY;
  const dy = y - lastY;
  lastY = y;
  vel = lerp(vel, dy, 0.14);

  if (bar) {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
  }

  // Ticker speeds up with scroll, reverses when scrolling up, settles back to 1
  if (ticker && !reduced) {
    const a = ticker.getAnimations()[0];
    if (a) a.playbackRate = 1 + clamp(vel * 0.45, -9, 9);
    if (Math.abs(vel) > 0.04) active = true;
    else if (a) a.playbackRate = 1;
  }

  cx = lerp(cx, mx, 0.07);
  cy = lerp(cy, my, 0.07);
  if (Math.abs(cx - mx) > 0.001 || Math.abs(cy - my) > 0.001) active = true;

  for (const l of visible) {
    const r = l.host.getBoundingClientRect();
    const off = r.top + r.height / 2 - innerHeight / 2;
    l.el.style.translate = `${(cx * l.depth).toFixed(2)}px ${(cy * l.depth + off * l.speed).toFixed(2)}px`;
  }

  if (cursor) {
    px = lerp(px, tx, 0.22);
    py = lerp(py, ty, 0.22);
    cursor.style.transform = `translate3d(${px - 48}px, ${py - 48}px, 0)`;
    if (Math.abs(px - tx) > 0.1 || Math.abs(py - ty) > 0.1) active = true;
  }

  if (active) schedule();
}

addEventListener('scroll', schedule, { passive: true });

if (fine) {
  addEventListener(
    'pointermove',
    (e) => {
      mx = (e.clientX / innerWidth - 0.5) * 2;
      my = (e.clientY / innerHeight - 0.5) * 2;
      tx = e.clientX;
      ty = e.clientY;
      if (cursor) {
        const t = (e.target as Element | null)?.closest<HTMLElement>('[data-cursor]');
        cursor.dataset.on = t ? '1' : '0';
        if (t && label) label.textContent = t.dataset.cursor ?? '';
      }
      schedule();
    },
    { passive: true },
  );
} else if (cursor) {
  cursor.remove();
}

schedule();
