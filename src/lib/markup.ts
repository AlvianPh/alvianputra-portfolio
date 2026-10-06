/**
 * Markup ringan untuk teks di portfolio.ts.
 * "==teks==" → bagian yang diberi stabilo (Highlight).
 */
export interface TextSegment {
  text: string;
  highlight: boolean;
}

export function parseHighlights(input: string): TextSegment[] {
  return input
    .split(/(==[^=]+==)/g)
    .filter((part) => part.length > 0)
    .map((part) =>
      part.startsWith('==') && part.endsWith('==')
        ? { text: part.slice(2, -2), highlight: true }
        : { text: part, highlight: false },
    );
}
