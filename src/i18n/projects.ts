import type { Locale } from './index';

export type Slug = 'migala' | 'oneprodex' | 'lasalle' | 'fuera' | 'kiritaai' | 'mimi' | 'pausa' | 'umbral' | 'counterpoint' | 'quetedebo';
type L = Record<Locale, string>;
const L = (en: string, es: string): L => ({ en, es });

export interface Block { label: L; body?: L; items?: L[]; pending?: L; chips?: string[]; stat?: L; scores?: { v: number; m: number; label: L }[]; note?: L }
export interface Project {
  n: string; name: string; nameA: string; nameB: string;
  cat: L; tagline: L; statement: L; summary: L;
  features: (L | null)[]; blocks: Block[];
  year?: string; stack?: string; url?: string; repo?: string; status?: L; concept?: boolean; mobileOnly?: boolean;
}

export const ORDER: Slug[] = ['counterpoint', 'migala', 'oneprodex', 'lasalle', 'fuera', 'kiritaai', 'mimi', 'pausa', 'umbral', 'quetedebo'];
/** Two-digit project count, derived so adding a project updates every "/ 04" label. */
export const TOTAL = String(ORDER.length).padStart(2, '0');

/** Projects featured on the landing; the rest only live in /work. */
export const LANDING: Slug[] = ['counterpoint', 'oneprodex', 'migala', 'lasalle', 'fuera', 'kiritaai'];
export const LANDING_TOTAL = String(LANDING.length).padStart(2, '0');

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
  mimi: {
    n: '06', name: 'MIMI & CO.', nameA: 'MIMI ', nameB: '& CO.',
    concept: true, year: '2026', stack: 'Astro 7 · Tailwind CSS 4 · Three.js',
    url: 'https://gelato-landing-mu.vercel.app/', repo: 'https://github.com/maticarrera12/gelato-landing', status: L('Concept project', 'Proyecto conceptual'),
    cat: L('Concept website — gelato shop', 'Sitio conceptual — heladería'),
    tagline: L('A scoop of gelato, built from scratch as you scroll.', 'Un helado armado desde cero mientras scrolleás.'),
    statement: L('A gelato shop where the 3D matches the interface.', 'Una heladería donde el 3D es parte de la interfaz.'),
    summary: L('A single-page site for MIMI & CO., a gelato and candy lab. A portfolio piece with a neo-pop look and a scroll-driven 3D story that assembles a scoop from raw ingredients.', 'Un sitio de una sola página para MIMI & CO., un laboratorio de helados y golosinas. Una pieza de portfolio con estética neo-pop y una historia 3D guiada por el scroll que arma un helado a partir de sus ingredientes.'),
    features: [L('3D hero cone that assembles itself on load', 'Cono 3D en el hero que se arma solo al cargar'), L('Scroll-driven 3D story that also plays in reverse', 'Historia 3D guiada por el scroll que también se reproduce al revés'), L('Cone builder with spring physics', 'Armador de conos con física de resortes'), L('Catalog, mood matcher and order flow', 'Catálogo, selector por ánimo y flujo de pedido'), L('Cart with a fake checkout and WhatsApp ordering', 'Carrito con checkout simulado y pedido por WhatsApp')],
    blocks: [
      { label: L('The idea', 'La idea'), body: L('Make the 3D feel like part of the interface instead of a decoration on top of it: thick ink outlines, hard shadows and a pastel palette shared by the scenes and the UI.', 'Que el 3D se sienta parte de la interfaz y no una decoración encima: contornos gruesos de tinta, sombras duras y una paleta pastel compartida entre las escenas y la UI.') },
      { label: L('The experience', 'La experiencia'), body: L('A cone builds itself on load, the scroll story takes ingredients to a served scoop, and the visitor can stack their own cone, pick a size and send the order over WhatsApp.', 'Un cono se arma solo al cargar, la historia del scroll lleva los ingredientes hasta un helado servido, y el visitante puede armar su propio cono, elegir un tamaño y enviar el pedido por WhatsApp.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Procedural toon-shaded models in Three.js, with no external assets', 'Modelos procedurales con sombreado toon en Three.js, sin assets externos'), L('Scroll story as a pure function of scroll progress', 'Historia del scroll como una función pura del progreso de scroll'), L('Scenes loaded with dynamic imports and paused when offscreen', 'Escenas cargadas con imports dinámicos y pausadas fuera de pantalla'), L('2D fallbacks when WebGL 2 is unavailable', 'Versiones 2D de respaldo cuando no hay WebGL 2')], chips: ['Astro 7', 'Tailwind CSS 4', 'Three.js', 'TypeScript'] },
      { label: L('The outcome', 'El resultado'), body: L('A concept project, so there are no business results to report. It shows how far a static Astro site can go with 3D and motion, live at gelato-landing-mu.vercel.app.', 'Es un proyecto conceptual, así que no hay resultados de negocio para contar. Muestra hasta dónde llega un sitio estático en Astro con 3D y movimiento, online en gelato-landing-mu.vercel.app.') },
    ],
  },
  pausa: {
    n: '07', name: 'pausa', nameA: '', nameB: 'pausa',
    concept: true, year: '2026', stack: 'Astro 7 · Tailwind CSS 4 · TypeScript',
    url: 'https://pausa-sigma.vercel.app/', repo: 'https://github.com/maticarrera12/pausa', status: L('Concept project', 'Proyecto conceptual'),
    cat: L('Concept website — designer furniture', 'Sitio conceptual — muebles de autor'),
    tagline: L('Objects that give shape to a space.', 'Objetos que dan forma a un espacio.'),
    statement: L('An editorial storefront for a furniture studio.', 'Una tienda editorial para un estudio de muebles de autor.'),
    summary: L('A concept storefront for a fictional Milan furniture studio, built to show how far a static Astro site can go: editorial layout, a working cart, filters, side panels and forms, with no UI framework.', 'Una tienda conceptual para un estudio de muebles ficticio de Milán, pensada para mostrar hasta dónde llega un sitio estático en Astro: layout editorial, carrito funcional, filtros, paneles laterales y formularios, sin framework de UI.'),
    features: [L('Editorial layout with offset, asymmetric grids', 'Layout editorial con grillas asimétricas y desplazadas'), L('Working cart keyed by product and finish', 'Carrito funcional por producto y acabado'), L('Filterable catalogue', 'Catálogo filtrable'), L('One side panel for product, bag, journal and service info', 'Un solo panel lateral para producto, bolsa, diario e información de servicio'), L('Showroom booking and newsletter forms', 'Formularios de reserva de visita y newsletter')],
    blocks: [
      { label: L('The idea', 'La idea'), body: L('A calm, editorial shop where the objects lead and the interface stays out of the way. The brand, products and people are fictional and no payments are taken.', 'Una tienda calma y editorial donde mandan los objetos y la interfaz se corre del medio. La marca, los productos y las personas son ficticios y no se procesan pagos.') },
      { label: L('The experience', 'La experiencia'), body: L('Browse eleven pieces by category, open a product in a side panel, choose a finish, fill the bag and book a showroom visit, with motion that stays quiet on repeated actions.', 'Recorrer once piezas por categoría, abrir un producto en un panel lateral, elegir un acabado, llenar la bolsa y reservar una visita al showroom, con un movimiento que se calma en las acciones repetidas.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Static HTML from Astro, with about 300 lines of TypeScript for all interactivity', 'HTML estático generado por Astro, con unas 300 líneas de TypeScript para toda la interactividad'), L('Design tokens defined once in Tailwind CSS 4', 'Tokens de diseño definidos una sola vez en Tailwind CSS 4'), L('Native form validation and accessible filter chips', 'Validación nativa de formularios y chips de filtro accesibles')], chips: ['Astro 7', 'Tailwind CSS 4', 'TypeScript'] },
      { label: L('The outcome', 'El resultado'), body: L('A concept project, so there are no business results to report. It shows a complete shop experience built without a UI framework, live at pausa-sigma.vercel.app.', 'Es un proyecto conceptual, así que no hay resultados de negocio para contar. Muestra una experiencia de tienda completa construida sin framework de UI, online en pausa-sigma.vercel.app.') },
    ],
  },
  umbral: {
    n: '08', name: 'UMBRAL', nameA: 'UM', nameB: 'BRAL',
    concept: true, year: '2026', stack: 'Astro', url: 'https://umbral-eight-theta.vercel.app/', status: L('Concept project', 'Proyecto conceptual'),
    cat: L('Concept website — architecture studio', 'Sitio conceptual — estudio de arquitectura'),
    tagline: L('Architecture shaped by a way of living.', 'Arquitectura pensada para una forma de vivir.'),
    statement: L('A portfolio site for a small residential architecture studio.', 'Un sitio de portfolio para un pequeño estudio de arquitectura residencial.'),
    summary: L('A concept website for UMBRAL, a small residential architecture studio in Buenos Aires, built with Astro. It presents selected works, an indexed list of projects with filters, and the studio’s approach.', 'Un sitio conceptual para UMBRAL, un pequeño estudio de arquitectura residencial de Buenos Aires, desarrollado con Astro. Presenta obras seleccionadas, un índice de proyectos con filtros y el enfoque del estudio.'),
    features: [L('Selected works with location and year', 'Obras seleccionadas con lugar y año'), L('Project index filterable by type and status', 'Índice de obras filtrable por tipo y estado'), L('Studio approach and working process', 'Enfoque del estudio y forma de trabajo')],
    blocks: [
      { label: L('The idea', 'La idea'), body: L('Give an architecture studio a quiet, confident presence where the work speaks first. The studio, its projects and the copy are fictional.', 'Darle a un estudio de arquitectura una presencia tranquila y segura, donde la obra habla primero. El estudio, sus proyectos y los textos son ficticios.') },
      { label: L('The approach', 'El enfoque'), body: L('Short, plain copy that treats each house as a response to its place, materials and the people who live there, with an index that makes the whole body of work easy to scan.', 'Textos breves y claros que tratan cada casa como una respuesta a su lugar, sus materiales y las personas que la habitan, con un índice que permite recorrer toda la obra de un vistazo.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Built with Astro', 'Desarrollado con Astro')], chips: ['Astro'] },
      { label: L('The outcome', 'El resultado'), body: L('A concept project, so there are no business results to report. It shows a complete, restrained site for an architecture practice, live at umbral-eight-theta.vercel.app.', 'Es un proyecto conceptual, así que no hay resultados de negocio para contar. Muestra un sitio completo y sobrio para un estudio de arquitectura, online en umbral-eight-theta.vercel.app.') },
    ],
  },
  counterpoint: {
    n: '09', name: 'Counterpoint', nameA: 'Counter', nameB: 'point',
    year: '2026', stack: 'Astro · Tailwind CSS', url: 'https://www.estudiocounterpoint.com/',
    cat: L('Studio website — web design & development', 'Sitio de estudio — diseño y desarrollo web'),
    tagline: L('Nothing is decorative. Everything is deliberate.', 'Nada es decorativo. Todo es deliberado.'),
    statement: L('The website of my own web design and development studio.', 'El sitio de mi propio estudio de diseño y desarrollo web.'),
    summary: L('The website for Counterpoint, an independent web design and development studio in Buenos Aires. It builds landing pages, institutional sites and redesigns for brands and small businesses, designing and developing in the same place.', 'El sitio de Counterpoint, un estudio independiente de diseño y desarrollo web en Buenos Aires. Hace landing pages, sitios institucionales y rediseños para marcas y pymes, diseñando y desarrollando en el mismo lugar.'),
    features: [L('Landing pages, institutional sites and web redesign', 'Landing pages, sitios institucionales y rediseño web'), L('Studio manifesto and process', 'Manifiesto y proceso del estudio'), L('Selected work and case studies', 'Trabajo seleccionado y case studies'), L('Custom identity, typography and animations', 'Identidad, tipografía y animaciones a medida')],
    blocks: [
      { label: L('The challenge', 'El desafío'), body: L('A new studio with no template to represent it, and a brand that had to feel its own from the first scroll.', 'Un estudio nuevo, sin plantilla que lo represente y con una marca que debía sentirse propia desde el primer scroll.') },
      { label: L('The approach', 'El enfoque'), body: L('Structure before style: identity, typography and animations designed to measure, with a manifesto built on the idea of counterpoint, two independent lines that sound together without stepping on each other.', 'Estructura antes que estilo: identidad, tipografía y animaciones diseñadas a medida, con un manifiesto basado en la idea de contrapunto, dos líneas independientes que suenan juntas sin pisarse.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Designed and built in Astro and Tailwind CSS, without starting from a template', 'Diseñado y desarrollado en Astro y Tailwind CSS, sin partir de un template'), L('Technical SEO from day one', 'SEO técnico desde el día uno')], chips: ['Astro', 'Tailwind CSS', 'SEO'] },
      { label: L('The outcome', 'El resultado'), body: L('A lightweight, fast site with a coherent visual language from end to end, live at estudiocounterpoint.com.', 'Un sitio liviano y rápido, con un lenguaje visual coherente de punta a punta, online en estudiocounterpoint.com.') },
    ],
  },
  quetedebo: {
    n: '10', name: 'quetedebo', nameA: 'que', nameB: 'tedebo',
    mobileOnly: true, year: '2026', stack: 'React · Vite · PWA', url: 'https://quetedebo.vercel.app/', repo: 'https://github.com/maticarrera12/quetedebo',
    cat: L('Progressive web app — shared expenses', 'Aplicación web progresiva — gastos compartidos'),
    tagline: L('Everyone chips in. Everyone ends up even.', 'Todos ponen. Todos terminan iguales.'),
    statement: L('A small app to settle up after a trip, a get-together or a barbecue.', 'Una app chica para ajustar cuentas después de un viaje, una juntada o un asado.'),
    summary: L('quetedebo adds up what each person paid at a get-together, trip or barbecue, and works out the shortest set of transfers so everyone ends up even. It is a PWA, so it installs on the phone and feels like a native app.', 'quetedebo suma cuánto puso cada uno en una juntada, un viaje o un asado y calcula el camino más corto de transferencias para que todos queden iguales. Es una PWA: se instala en el celular y se siente como una app nativa.'),
    features: [L('Record what each person paid', 'Carga de lo que puso cada persona'), L('Shortest set of transfers to settle all debts', 'Camino más corto de transferencias para saldar las deudas'), L('Installable PWA designed for the phone', 'PWA instalable pensada para el celular'), L('History kept in session storage', 'Historial guardado en session storage')],
    blocks: [
      { label: L('The challenge', 'El desafío'), body: L('After a group outing nobody remembers who paid what, and settling up turns into a chain of back-and-forth transfers.', 'Después de una salida grupal nadie recuerda quién puso qué, y ajustar cuentas termina en una cadena de transferencias cruzadas.') },
      { label: L('The approach', 'El enfoque'), body: L('Few screens and one job: enter the amounts, get the minimum number of payments. The interface is designed for the phone first, with no desktop layout to fall back on.', 'Pocas pantallas y una sola tarea: cargar los montos y obtener la mínima cantidad de pagos. La interfaz está pensada primero para el celular, sin versión de escritorio a la que recurrir.') },
      { label: L('The engineering', 'La ingeniería'), items: [L('Debt-settling algorithm that minimises the number of transfers', 'Algoritmo de saldado de deudas que minimiza la cantidad de transferencias'), L('Installable PWA with a mobile-adapted interface', 'PWA instalable con una interfaz adaptada al celular'), L('History persisted in session storage for now', 'Historial persistido en session storage por ahora')], chips: ['React', 'Vite', 'PWA'] },
      { label: L('The outcome', 'El resultado'), body: L('A small, fast tool that settles a group’s accounts in a few taps, live at quetedebo.vercel.app.', 'Una herramienta chica y rápida que ajusta las cuentas de un grupo en pocos toques, online en quetedebo.vercel.app.') },
    ],
  },
};

/** Project numbers follow ORDER, so reordering never leaves a stale `n`. */
ORDER.forEach((slug, i) => { PROJECTS[slug].n = String(i + 1).padStart(2, '0'); });

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
  mimi: { groups: ['web'], tags: [L('Concept', 'Conceptual'), L('3D', '3D')], slot: 'work-mimi' },
  pausa: { groups: ['web'], tags: [L('Concept', 'Conceptual'), L('E-commerce', 'E-commerce')], slot: 'work-pausa' },
  umbral: { groups: ['web'], tags: [L('Concept', 'Conceptual'), L('Architecture', 'Arquitectura')], slot: 'work-umbral' },
  quetedebo: { groups: ['apps'], tags: [L('PWA', 'PWA'), L('Mobile', 'Mobile')], slot: 'work-quetedebo' },
  counterpoint: { groups: ['web'], tags: [L('Studio', 'Estudio'), L('Website', 'Sitio web')], slot: 'work-counterpoint' },
};
export const archiveHref = (locale: Locale) => (locale === 'es' ? '/es/work/' : '/work/');
