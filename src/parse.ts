import { ByteReader } from "./reader";
import {
  ClutInfo,
  ColourWithAlpha,
  Flags,
  FormatInfo,
  PixelData,
  PixelInfo,
  PixelMode,
  TimImage,
} from "./types";

/**
 * Given a number `input`, pulls out `bits` information, starting from bit
 * `index`
 * @param input an input byte number (between 0 and 255)
 * @param index reading right to left, specify which bit you're starting at
 * @param bits how many bits you want to read
 */
export function retrieveBits(input: number, index: number, bits: number) {
  const mask = ((1 << bits) - 1) << index;
  return (input & mask) >> index;
}

/**
 * Extracts the TIM format information (id, version) from the `reader`. Assumes
 * that the `reader` is in the correct position.
 *
 * If the parsed id is not `0x10`, throws an error.
 *
 * @param {ByteReader} reader - a ByteReader object
 * @returns {FormatInfo} format information, including the id and version
 */
export function parseFormatInfo(reader: ByteReader): FormatInfo {
  const data = reader.readWord();

  // Bits 0-7 are our ID value. For TIM images, it must be 0x10
  const id = retrieveBits(data, 0, 8);
  if (id !== 0x10) {
    throw new Error(
      `parsed ID does not match TIM spec. Expected 0x10, got ${id}`
    );
  }

  // Bits 8-15 are the version. This will be 0x00 on the PSX
  const version = retrieveBits(data, 8, 8);

  // Bits 16-32 are Reserved. There shouldn't be anything in there.
  const reservedSpace = retrieveBits(data, 16, 16);

  return {
    id,
    version,
    reservedSpace,
  };
}

/**
 * Extracts the file flags from the `reader`. Assumes `reader` is in the correct
 * position.
 *
 * @param {ByteReader} reader - a ByteReader object
 * @returns {Flags}  flag information, including how to read the CLUT
 */
export function parseFlags(reader: ByteReader): Flags {
  const data = reader.readWord();

  // Bits 0-3 are the pmode (Pixel Mode)
  const pmode = retrieveBits(data, 0, 3);

  // Bit 4 is the cf (CLUT flag)
  const cf = retrieveBits(data, 3, 1);

  // Remainder is reserved space.
  const reservedSpace = retrieveBits(data, 4, 28);

  return {
    pmode,
    cf,
    reservedSpace,
  };
}

/**
 * Extracts the CLUT information from the `reader`. Assumes the `reader` is in
 * the correct position, and that a CLUT exists.
 *
 * @param {ByteReader} reader - a ByteReader object.
 * @returns {ClutInfo} the CLUT
 */
export function parseClutInfo(reader: ByteReader): ClutInfo {
  const bnum = reader.readWord();

  const dx = reader.readHalf();
  const dy = reader.readHalf();

  const w = reader.readHalf();
  const h = reader.readHalf();

  // bnum - 12, as we've just parsed 12 bytes.
  const endPosition = reader.position() + (bnum - 12);

  const clut: ColourWithAlpha[] = [];

  while (reader.position() < endPosition) {
    const data = reader.readHalf();

    const r = retrieveBits(data, 0, 5);
    const g = retrieveBits(data, 5, 5);
    const b = retrieveBits(data, 10, 5);
    const stp = retrieveBits(data, 15, 1);

    clut.push({
      r,
      g,
      b,
      stp,
    });
  }

  return {
    bnum,
    dx,
    dy,
    w,
    h,
    clut,
  };
}

/**
 * Extracts the Pixel information for the image from the `reader`. Assumes that
 * the `reader` is in the correct place.
 *
 * Requires `pixelMode` parsed from `parseFlags` to correctly interpret the
 * `PixelData` parts.
 *
 * Note, parsing Mixed mode is not supported. PSX docs are rather unclear on
 * _how_ you might parse mixed TIM data.
 *
 * @param {ByteReader} reader - a ByteReader object
 * @param {PixelMode} pixelMode - the pixel mode, parsed from the Flags block.
 * @returns {PixelInfo} information on the pixel layout
 */
export function parsePixelInfo(
  reader: ByteReader,
  pixelMode: PixelMode
): PixelInfo {
  const bnum = reader.readWord();
  const dx = reader.readHalf();
  const dy = reader.readHalf();
  const w = reader.readHalf();
  const h = reader.readHalf();

  // bnum - 12, as we've just parsed 12 bytes.
  const endPosition = reader.position() + (bnum - 12);

  const data: PixelData[] = [];

  while (reader.position() < endPosition) {
    switch (pixelMode) {
      case PixelMode.CLUT4:
        // The reader will blow up if we've ended on a nibble, but deferring
        // that until I have an adequate test image for it.
        const four = reader.readByte();
        data.push(retrieveBits(four, 0, 4));
        data.push(retrieveBits(four, 4, 4));
        break;
      case PixelMode.CLUT8:
        // The docs indicate that the 8-bit CLUT operates on words, but in
        // reality, you can actually end up on a half-word (as per our test)
        // so, this'll end up with more iterations, but handle those half-word
        // cases.
        data.push(reader.readHalf());
        break;
      case PixelMode.Direct15:
        const fifteen = reader.readWord();
        const r = retrieveBits(fifteen, 0, 5);
        const g = retrieveBits(fifteen, 15, 5);
        const b = retrieveBits(fifteen, 10, 5);
        const stp = retrieveBits(fifteen, 15, 1);

        data.push({
          r,
          g,
          b,
          stp,
        });

        break;
      case PixelMode.Direct24:
        const x = reader.readWord();
        const y = reader.readWord();
        const z = reader.readWord();

        data.push({
          r: retrieveBits(x, 0, 8),
          g: retrieveBits(x, 8, 8),
          b: retrieveBits(y, 0, 8),
        });

        data.push({
          r: retrieveBits(y, 8, 8),
          g: retrieveBits(z, 0, 8),
          b: retrieveBits(z, 8, 8),
        });
        break;
      case PixelMode.Mixed:
        throw new Error("Mixed pixel mode not supported.");
    }
  }

  return {
    bnum,
    dx,
    dy,
    w,
    h,
    data,
  };
}

/**
 * Given `data`, parses a TIM image file.
 * @param {ArrayBuffer} data - input data
 * @returns {TimImage} an object representing the TIM image
 */
export function parse(data: ArrayBuffer): TimImage {
  const reader = new ByteReader(data);
  const id = parseFormatInfo(reader);
  const flags = parseFlags(reader);
  if (flags.cf === 1) {
    return {
      id,
      flags,
      clut: parseClutInfo(reader),
      pixels: parsePixelInfo(reader, flags.pmode),
    };
  }

  return {
    id,
    flags,
    pixels: parsePixelInfo(reader, flags.pmode),
  };
}
