import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';
export type Copy = Record<keyof typeof en, string>;

export const copy: Record<Locale, Copy> = { en, es };

export const alternate: Record<Locale, { locale: Locale; href: string }> = {
  en: { locale: 'es', href: '/es/' },
  es: { locale: 'en', href: '/' },
};

export const homeHref = (l: Locale) => (l === 'es' ? '/es/' : '/');
