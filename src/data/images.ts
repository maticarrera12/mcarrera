import { existsSync } from 'node:fs';
import { join } from 'node:path';

const EXTS = ['webp', 'jpg', 'jpeg', 'png', 'avif'];

/**
 * Looks for public/projects/<slug>/<name>.<ext> at build time and returns its URL.
 * Dropping a file in that folder is enough: no code change needed.
 */
export function projectImage(slug: string, name: string): string | undefined {
  return find(`projects/${slug}`, name);
}

/** Same convention for site-wide photos: public/images/<name>.<ext> (hero, about). */
export function siteImage(name: string): string | undefined {
  return find('images', name);
}

function find(dir: string, name: string): string | undefined {
  for (const ext of EXTS) {
    if (existsSync(join(process.cwd(), 'public', dir, `${name}.${ext}`))) return `/${dir}/${name}.${ext}`;
  }
  return undefined;
}
