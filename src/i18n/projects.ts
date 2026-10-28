import type { Locale } from './index';

export type Slug = 'migala' | 'oneprodex' | 'lasalle' | 'fuera' | 'kiritaai';
type L = Record<Locale, string>;
const L = (en: string, es: string): L => ({ en, es });

export interface Block { label: L; body?: L; items?: L[]; pending?: L; chips?: string[]; stat?: L; scores?: { v: number; m: number; label: L }[]; note?: L }
export interface Project {
  n: string; name: string; nameA: string; nameB: string;
  cat: L; tagline: L; statement: L; summary: L;
  features: (L | null)[]; blocks: Block[];
  year?: string; stack?: string; url?: string; repo?: string; status?: L; concept?: boolean;
}

export const ORDER: Slug[] = ['migala', 'oneprodex', 'lasalle', 'fuera', 'kiritaai'];
/** Two-digit project count, derived so adding a project updates every "/ 04" label. */
export const TOTAL = String(ORDER.length).padStart(2, '0');

export const PROJECTS: Record<Slug, Project> = {
  migala: {
    n: '01', name: 'Migala', nameA: 'Mi', nameB: 'gala',
    year: '2026', stack: 'Next.js 16 · React 19 · Supabase', status: L('In development', 'En desarrollo'),
    cat: L('CRM — event venues', 'CRM — salones de eventos'),
    tagline: L('Every event, in one place.', 'Cada evento, en un solo lugar.'),
    statement: L('A CRM built around how event venues actually run.', 'Un CRM pensado para cómo funciona realmente un salón de eventos.'),
    summary: L('Migala is a CRM for event venues, built with Next.js 16 and React 19. It brings event organisation, staff assignment, payment control, stock and a visit calendar into one system.', 'Migala es un CRM para salones de eventos, desarrollado con Next.js 16 y React 19. Reúne en un solo sistema la organización de eventos, la asignación de staff, el control de pagos, el stock y el calendario de visitas.'),
    features: [L('Event organisation', 'Organización de eventos'), L('Staff assignment', 'Asignación de staff'), L('Payment control', 'Control de pagos'), L('Stock management', 'Control de stock'), L('Visit calendar', 'Calendario de visitas'), L('Staff event confirmation and upcoming view', 'Confirmación de eventos y próximos eventos para el staff'), L('WhatsApp notifications and reminders', 'Avisos y recordatorios por WhatsApp')],
    blocks: [
      { label: L('The challenge', 'El desafío'), body: L('Everything lived in a spreadsheet: events in one place, calendars kept apart, and stock tracked loosely. Staff had no easy way to confirm an event or see what was coming up.', 'Todo vivía en un Excel: los eventos por un lado, los calendarios separados y un control de stock flojo. El staff no tenía una forma cómoda de confirmar un evento ni de ver cuáles venían.') },
      { label: L('The approach', 'El enfoque'), body: L('One system for the whole operation: events, visits, staff, payments and stock in the same place, with a simple view for staff to confirm events and check the next ones.', 'Un solo sistema para toda la operación: eventos, visitas, staff, pagos y stock en el mismo lugar, con una vista simple para que el staff confirme eventos y revise los próximos.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Supabase as the backend: database and authentication on a single platform', 'Supabase como backend: base de datos y autenticación en una sola plataforma'), L('Sign-in handled by Supabase Auth', 'Acceso resuelto con Supabase Auth'), L('WhatsApp Business integration to notify staff about events, confirm attendance and remind visits', 'Integración con WhatsApp Business para avisar al staff de los eventos, confirmar asistencia y recordar visitas')], chips: ['Next.js 16', 'React 19', 'Supabase', 'Supabase Auth', 'WhatsApp Business'] },
      { label: L('The outcome', 'El resultado'), body: L('Under construction. The system is in active development.', 'En construcción. El sistema está en desarrollo activo.') },
    ],
  },
  oneprodex: {
    n: '02', name: 'OneProdex', nameA: 'One', nameB: 'prodex',
    year: '2026', stack: 'Next.js · TypeScript · Supabase · API-Football',
    url: 'https://oneprodex.vercel.app', repo: 'https://github.com/maticarrera12/oneprodex',
    cat: L('Interactive platform — World Cup 2026', 'Plataforma interactiva — Mundial 2026'),
    tagline: L('Predict. Compete. Watch the table move.', 'Pronosticá. Competí. Mirá cómo se mueve la tabla.'),
    statement: L('A World Cup prediction game, built as a real product.', 'Un prode mundialista, construido como un producto real.'),
    summary: L('An interactive platform for FIFA World Cup 2026 predictions, with private groups, rankings and real-time scoring.', 'Una plataforma interactiva de predicciones para el Mundial FIFA 2026, con grupos privados, rankings y puntuación en tiempo real.'),
    features: [L('Match and knockout-bracket predictions', 'Predicciones por partido y por llaves'), L('Invite-only private groups', 'Grupos privados por invitación'), L('Dynamic scoring per match', 'Puntaje dinámico según el partido'), L('Live results via API-Football', 'Resultados en vivo con API-Football'), L('Achievements & awards', 'Logros y premios'), L('Google sign-in', 'Acceso con Google')],
    blocks: [
      { label: L('The challenge', 'El desafío'), body: L('Prediction games among friends tend to live in spreadsheets and group chats. Scores get disputed, tables go stale, and momentum fades before the knockout stage.', 'Los prodes entre amigos suelen vivir en planillas y grupos de chat. Los puntajes se discuten, las tablas quedan desactualizadas y el entusiasmo se apaga antes de los cruces.') },
      { label: L('The approach', 'El enfoque'), body: L('Private groups as the social core, a transparent scoring system as the rulebook, and rankings that move as matches resolve.', 'Los grupos privados como núcleo social, un sistema de puntuación transparente como reglamento y rankings que se mueven a medida que se definen los partidos.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Group and membership model for private, invite-only competitions', 'Modelo de grupos y membresías para competencias privadas, con acceso por invitación'), L('Scoring rules applied match by match', 'Reglas de puntuación aplicadas partido a partido'), L('Rankings recalculated in real time', 'Rankings recalculados en tiempo real'), L('Live match results through the API-Football integration', 'Resultados en vivo mediante la integración con API-Football'), L('Achievements and awards system', 'Sistema de logros y premios')], chips: ['Next.js', 'TypeScript', 'Supabase', 'API-Football', 'Google OAuth'] },
      { label: L('The experience', 'La experiencia'), body: L('Join a group, predict match by match, watch the table move. The next action stays obvious for the whole tournament.', 'Unirse a un grupo, pronosticar partido a partido, ver cómo se mueve la tabla. La próxima acción queda clara durante todo el torneo.') },
      { label: L('The outcome', 'El resultado'), body: L('A working platform with private groups, rankings and live scoring.', 'Una plataforma funcionando con grupos privados, rankings y puntuación en vivo.'), stat: L('50 real users', '50 usuarios reales') },
    ],
  },
  lasalle: {
    n: '03', name: 'Estudio Lasalle', nameA: 'Estudio ', nameB: 'Lasalle',
    year: '2026', stack: 'Astro', url: 'https://estudiolasalle.com/',
    cat: L('Professional website — law firm', 'Sitio profesional — estudio jurídico'),
    tagline: L('A law firm that feels like family.', 'Un estudio jurídico cercano, como de familia.'),
    statement: L('A friendly law firm, in words anyone understands.', 'Un estudio amable, en palabras que todos entienden.'),
    summary: L('A website for Estudio Lasalle, a family law firm, built with Astro and a strong focus on SEO. The goal was a close, friendly lawyer, with plain language and no hard words.', 'Un sitio para Estudio Lasalle, un estudio jurídico familiar, desarrollado con Astro y con mucho foco en SEO. La meta era un abogado cercano y amable, con lenguaje claro y sin palabras difíciles.'),
    features: [L('Plain-language content', 'Contenido en lenguaje claro'), L('SEO-focused build', 'Desarrollo con foco en SEO'), L('Close, family-firm tone', 'Tono cercano, de estudio familiar')],
    blocks: [
      { label: L('The challenge', 'El desafío'), body: L('Convey what the client asked for: a close, friendly lawyer and a family firm, speaking in a way that anyone can understand.', 'Transmitir lo que pidió el cliente: un abogado cercano y amable, un estudio familiar, que hable de forma que cualquiera entienda.') },
      { label: L('The approach', 'El enfoque'), body: L('Everyday language instead of legal jargon, a warm tone throughout, and a clear path to get in touch.', 'Lenguaje de todos los días en lugar de jerga legal, un tono cálido en todo el sitio y un camino claro para ponerse en contacto.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Built with Astro', 'Desarrollado con Astro'), L('SEO as a main focus of the build', 'El SEO como foco principal del desarrollo')], chips: ['Astro', 'SEO'] },
      { label: L('The outcome', 'El resultado'), body: L('The site is live at estudiolasalle.com, with plain-language content and an SEO-focused build, delivered in 2026.', 'El sitio está online en estudiolasalle.com, con contenido en lenguaje claro y un desarrollo con foco en SEO, entregado en 2026.'), scores: [{ v: 100, m: 100, label: L('SEO', 'SEO') }, { v: 100, m: 100, label: L('Best practices', 'Buenas prácticas') }, { v: 99, m: 94, label: L('Performance', 'Rendimiento') }, { v: 94, m: 88, label: L('Accessibility', 'Accesibilidad') }], note: L('Desktop (large) and mobile · Google PageSpeed Insights · Oct 2026', 'Desktop (grande) y móvil · Google PageSpeed Insights · oct 2026') },
    ],
  },
  fuera: {
    n: '04', name: 'Fuera©', nameA: '', nameB: 'Fuera©',
    concept: true, year: '2026', stack: 'Astro', url: 'https://fuera-streetwear.vercel.app/', status: L('Concept project', 'Proyecto conceptual'),
    cat: L('Concept website — streetwear brand', 'Sitio conceptual — marca de streetwear'),
    tagline: L('Uniforms for those who go their own way.', 'Uniformes para quienes van por su cuenta.'),
    statement: L('A streetwear brand, designed from the look outward.', 'Una marca de streetwear, pensada desde la estética.'),
    summary: L('A concept e-commerce site for FUERA©, an independent streetwear brand. A personal project built with Astro, where the aesthetic comes first.', 'Un e-commerce conceptual para FUERA©, una marca de streetwear independiente. Un proyecto personal desarrollado con Astro, donde la estética va primero.'),
    features: [L('Bold type with a cobalt, cream and yellow palette', 'Tipografía contundente y paleta cobalto, crema y amarillo'), L('Duotone photography and halftone texture', 'Fotografía en duotono y textura de trama'), L('Drop 001: tees, hoodie and cap', 'Drop 001: remeras, buzo y gorra')],
    blocks: [
      { label: L('The idea', 'La idea'), body: L('Give a streetwear brand a clear attitude from day one, so it feels like it belongs to someone and not to a template.', 'Darle a una marca de streetwear una actitud clara desde el primer día, para que se sienta de alguien y no de una plantilla.') },
      { label: L('The aesthetic', 'La estética'), body: L('Heavy type, a cobalt, cream and yellow palette, duotone photography, halftone texture and a hand-painted stroke. The copy carries the same voice: “No encajamos. Mejor.”', 'Tipografía pesada, paleta cobalto, crema y amarillo, fotografía en duotono, textura de trama y una pincelada pintada a mano. El texto lleva la misma voz: “No encajamos. Mejor.”') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Built with Astro', 'Desarrollado con Astro')], chips: ['Astro'] },
      { label: L('The outcome', 'El resultado'), body: L('A concept project, so there are no business results to report. What it shows is a complete, consistent brand look, live at fuera-streetwear.vercel.app.', 'Es un proyecto conceptual, así que no hay resultados de negocio para contar. Lo que muestra es una imagen de marca completa y coherente, online en fuera-streetwear.vercel.app.') },
    ],
  },
  kiritaai: {
    n: '05', name: 'KiritaAI', nameA: 'Kirita', nameB: 'AI',
    year: '2025', stack: 'Next.js 15 · AI · Play Store scraper',
    url: 'https://kiritaai.com/', repo: 'https://github.com/maticarrera12/kiritaai',
    cat: L('AI product — app review analysis', 'Producto con IA — análisis de reseñas de apps'),
    tagline: L('Read the reviews. Find the niche.', 'Leé las reseñas. Encontrá el nicho.'),
    statement: L('Turning app-store reviews into product opportunities.', 'Convertir reseñas de tiendas de apps en oportunidades de producto.'),
    summary: L('KiritaAI scrapes Google Play reviews and uses AI to analyse them, surfacing what users complain about and where the opportunities are. It is gamified, with achievements, daily search missions and a daily Niche Hunter.', 'KiritaAI extrae reseñas de Google Play y las analiza con IA para mostrar de qué se quejan los usuarios y dónde hay oportunidades. Está gamificado, con logros, misiones diarias de búsqueda y un Niche Hunter diario.'),
    features: [L('Play Store review scraper', 'Scraper de reseñas de Play Store'), L('AI-powered review analysis', 'Análisis de reseñas con IA'), L('Achievements', 'Logros'), L('Daily search and niche missions', 'Misiones diarias de búsqueda y nichos'), L('Daily Niche Hunter: 5 growing niches, refreshed by a cron job', 'Niche Hunter diario: 5 nichos en crecimiento, actualizados por un cron job')],
    blocks: [
      { label: L('The challenge', 'El desafío'), body: L('Reviews are where users say what an app is missing, but reading them by hand does not scale, and finding a niche worth building for is mostly guesswork.', 'Las reseñas son donde los usuarios dicen qué le falta a una app, pero leerlas a mano no escala, y encontrar un nicho que valga la pena es casi adivinar.') },
      { label: L('The approach', 'El enfoque'), body: L('Pull the reviews automatically, let AI summarise the patterns, and wrap the research habit in game mechanics so coming back every day feels natural.', 'Traer las reseñas automáticamente, dejar que la IA resuma los patrones y envolver el hábito de investigar en mecánicas de juego para que volver cada día sea natural.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Google Play scraper feeding the analysis pipeline', 'Scraper de Google Play que alimenta el pipeline de análisis'), L('AI analysis of the collected reviews', 'Análisis con IA de las reseñas recolectadas'), L('Cron job that refreshes the Niche Hunter with 5 growing niches every day', 'Cron job que renueva el Niche Hunter con 5 nichos en crecimiento cada día'), L('Gamification layer: achievements and daily missions', 'Capa de gamificación: logros y misiones diarias')], chips: ['Next.js 15', 'AI', 'Play Store scraper', 'Cron jobs'] },
      { label: L('The outcome', 'El resultado'), body: L('Launched in 2025 and live at kiritaai.com, with a refreshed visual style.', 'Lanzado en 2025 y online en kiritaai.com, con un estilo visual renovado.'), stat: L('35 users', '35 usuarios') },
    ],
  },
};

export const projectHref = (locale: Locale, slug: Slug) => `${locale === 'es' ? '/es' : ''}/work/${slug}/`;
export const nextSlug = (slug: Slug): Slug => ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length];

export type Group = 'apps' | 'web' | 'ai';
/** Archive-only metadata: filter groups and tags per project. */
export const ARCHIVE: Record<Slug, { groups: Group[]; tags: L[]; slot: string }> = {
  migala: { groups: ['apps'], tags: [L('CRM', 'CRM'), L('Web app', 'App web')], slot: 'work-migala' },
  oneprodex: { groups: ['apps'], tags: [L('Platform', 'Plataforma'), L('Real-time', 'Tiempo real')], slot: 'work-oneprodex' },
  lasalle: { groups: ['web'], tags: [L('Website', 'Sitio web'), L('Legal', 'Legal')], slot: 'work-lasalle' },
  fuera: { groups: ['web'], tags: [L('Concept', 'Conceptual'), L('E-commerce', 'E-commerce')], slot: 'work-fuera' },
  kiritaai: { groups: ['apps', 'ai'], tags: [L('AI', 'IA'), L('Gamified', 'Gamificado')], slot: 'work-kiritaai' },
};
export const archiveHref = (locale: Locale) => (locale === 'es' ? '/es/work/' : '/work/');
