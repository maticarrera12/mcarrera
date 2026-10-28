const PAGE = 8;
const root = document.getElementById('archive');

if (root) {
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const rows = [...root.querySelectorAll<HTMLElement>('[data-panel="list"] [data-item]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-panel="grid"] [data-item]')];
  const listPanel = $('[data-panel="list"]');
  const gridPanel = $('[data-panel="grid"]');
  const empty = $('[data-empty]');
  const more = $<HTMLButtonElement>('[data-more]');
  const label = $('[data-label]');
  const input = $<HTMLInputElement>('[data-query]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let filter = 'all', query = '', view: 'list' | 'grid' = 'list', limit = PAGE;
  let animate = false;

  const setActive = (sel: string, attr: string, value: string) =>
    root.querySelectorAll<HTMLElement>(sel).forEach((b) => (b.dataset.active = String(b.dataset[attr] === value)));

  function apply() {
    const match = (el: HTMLElement) =>
      (filter === 'all' || el.dataset.groups!.split(' ').includes(filter)) && (!query || el.dataset.search!.includes(query));
    const keys = rows.filter(match).map((r) => r.dataset.key!);
    const shown = new Set(keys.slice(0, limit));

    [...rows, ...cards].forEach((el) => (el.hidden = !shown.has(el.dataset.key!)));
    const visRows = rows.filter((r) => !r.hidden);
    const visCards = cards.filter((c) => !c.hidden);
    visRows.forEach((r, i) => (r.dataset.accent = String(i % 3)));
    visCards.forEach((c, i) => {
      c.querySelector<HTMLElement>('[data-tag]')!.dataset.accent = String(i % 3);
      c.toggleAttribute('data-big', i % 5 === 0);
    });

    const none = keys.length === 0;
    listPanel.hidden = none || view !== 'list';
    gridPanel.hidden = none || view !== 'grid';
    empty.hidden = !none;
    more.hidden = keys.length <= limit;
    label.textContent = `${label.dataset.showing} ${shown.size} ${label.dataset.of} ${keys.length}`;
    setActive('[data-filter]', 'filter', filter);
    setActive('[data-view]', 'view', view);

    // Short staggered entrance on user-triggered changes (frequent action: keep it quick)
    if (animate && !reduced) {
      (view === 'list' ? visRows : visCards).forEach((el, i) =>
        el.animate(
          [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }],
          { duration: 260, delay: Math.min(i, 8) * 40, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'backwards' },
        ),
      );
    }
    animate = true;
  }

  root.querySelectorAll<HTMLElement>('[data-filter]').forEach((b) =>
    b.addEventListener('click', () => { filter = b.dataset.filter!; limit = PAGE; apply(); }));
  root.querySelectorAll<HTMLElement>('[data-view]').forEach((b) =>
    b.addEventListener('click', () => { view = b.dataset.view as 'list' | 'grid'; hidePreview(); apply(); }));
  input.addEventListener('input', () => { query = input.value.trim().toLowerCase(); limit = PAGE; apply(); });
  more.addEventListener('click', () => { limit += PAGE; apply(); });
  root.querySelector('[data-reset]')?.addEventListener('click', () => {
    filter = 'all'; query = ''; input.value = ''; limit = PAGE; apply();
  });

  /* ---------- Hover preview card (list view, fine pointers only) ---------- */
  const preview = document.getElementById('preview');
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let px = -400, py = -400, tx = -400, ty = -400, raf = 0;
  function hidePreview() { if (preview) preview.style.opacity = '0'; }

  if (preview && fine) {
    const pv = preview.firstElementChild as HTMLElement;
    const set = (sel: string, text: string) => (pv.querySelector<HTMLElement>(sel)!.textContent = text);
    const loop = () => {
      raf = 0;
      px += (tx - px) * 0.2; py += (ty - py) * 0.2;
      preview.style.transform = `translate3d(${px + 24}px, ${py - 110}px, 0) rotate(-2deg)`;
      if (Math.abs(tx - px) > 0.1 || Math.abs(ty - py) > 0.1) raf = requestAnimationFrame(loop);
    };
    rows.forEach((r) => {
      r.addEventListener('pointerenter', (e) => {
        if (view !== 'list') return;
        pv.dataset.accent = r.dataset.accent ?? '0';
        set('[data-pv-head]', `${r.dataset.n} — ${r.dataset.tags}`);
        set('[data-pv-name]', r.dataset.name!);
        set('[data-pv-n]', r.dataset.n!);
        if (px < 0) { px = e.clientX; py = e.clientY; }
        preview.style.opacity = '1';
      });
      r.addEventListener('pointerleave', hidePreview);
    });
    root.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
  }

  apply();
}
