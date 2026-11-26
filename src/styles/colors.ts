/**
 * Central palette for the Tinepo Gorontalo site.
 * Keep the matching CSS custom properties in globals.css in sync with these values.
 */
export const colors = {
  white: "#FFFFFF",
  ink: "#12313B",
  primary: "#087E8B",
  primaryDeep: "#075B66",
  primarySoft: "#DDF3F2",
  secondary: "#1C6E8C",
  secondarySoft: "#E2F1F6",
  accent: "#F2A65A",
  accentSoft: "#FFF1DF",
  leaf: "#5F8D62",
  leafSoft: "#E9F2E7",
  background: "#F8FBF9",
  surface: "#FFFFFF",
  text: "#18343B",
  muted: "#63777B",
  border: "#DCE8E5",
  ocean: "#C7E7E8",
  sand: "#F4E8D2",
  error: "#B42318",
  focus: "#D97706",
} as const;

export type ColorToken = keyof typeof colors;
