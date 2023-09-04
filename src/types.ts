/**
 * PSX TIM Pixel Mode Flags
 */
export enum PixelMode {
  CLUT4 = 0,
  CLUT8 = 1,
  Direct15 = 2,
  Direct24 = 3,
  Mixed = 4,
}

export interface FormatInfo {
  id: number;
  version: number;
  reservedSpace: number;
}

export interface Flags {
  pmode: PixelMode;
  cf: number;
  reservedSpace: number;
}

export interface Colour {
  r: number;
  g: number;
  b: number;
}

export interface ColourWithAlpha extends Colour {
  stp: number;
}

export interface ClutInfo {
  bnum: number;
  dx: number;
  dy: number;
  w: number;
  h: number;
  clut: ColourWithAlpha[];
}

export type PixelData = Colour | ColourWithAlpha | number;

export interface PixelInfo {
  bnum: number;
  dx: number;
  dy: number;
  w: number;
  h: number;
  data: PixelData[];
}

export interface TimImage {
  id: FormatInfo;
  flags: Flags;
  clut?: ClutInfo;
  pixels: PixelInfo;
}
