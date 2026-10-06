/**
 * Helper placeholder.
 * Placeholder = string yang diawali "[" dan diakhiri "]", mis. "[PROJECT NAME]".
 * Dipakai supaya konten yang belum diisi bisa disembunyikan / ditandai.
 */

export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  const v = value.trim();
  return v.startsWith('[') && v.endsWith(']');
}

/** True jika value sudah diisi dengan konten asli. */
export function isFilled(value: string | undefined | null): value is string {
  return !isPlaceholder(value);
}
