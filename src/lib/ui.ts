/**
 * Token visual bersama untuk komponen scrapbook.
 * Rotasi sengaja kecil (<= 1deg) dan otomatis dikurangi setengah di mobile.
 */

export type Tilt = 'none' | 'left' | 'right' | 'slight-left' | 'slight-right';

export const tiltDeg: Record<Tilt, string> = {
  none: '0deg',
  left: '-1deg',
  right: '1deg',
  'slight-left': '-0.5deg',
  'slight-right': '0.5deg',
};

/** Style inline untuk set rotasi via CSS variable `--tilt`. */
export function tiltStyle(tilt: Tilt): string {
  return `--tilt: ${tiltDeg[tilt]};`;
}

export type Accent = 'green' | 'blue' | 'orange';
export type AccentOrNeutral = Accent | 'neutral';

/** Warna dekorasi (fill/tape). Kontras rendah — jangan dipakai untuk teks. */
export const accentFill: Record<AccentOrNeutral, string> = {
  green: 'var(--color-green)',
  blue: 'var(--color-blue)',
  orange: 'var(--color-orange)',
  neutral: 'var(--color-paper-dark)',
};

/** Warna tint lembut (background sticky note). */
export const accentTint: Record<Accent, string> = {
  green: 'var(--color-green-tint)',
  blue: 'var(--color-blue-tint)',
  orange: 'var(--color-orange-tint)',
};

/** Warna teks aksen (lolos WCAG AA di atas paper). */
export const accentText: Record<Accent, string> = {
  green: 'text-green-ink',
  blue: 'text-blue-ink',
  orange: 'text-orange-ink',
};
