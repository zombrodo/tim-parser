import test from "ava";
import { ByteReader } from "./reader";
import {
  parseClutInfo,
  parseFlags,
  parseFormatInfo,
  parsePixelInfo,
} from "./parse";

const testInput = `
10000000 08000000 2C000000 0000E001 10000100
0080177F 92760E72 6A45E71C F3397946 1F570080
00800080 00800080 FF7F1F00 0C020000 00000000
08002000 FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF
0F000000 00003000 00000040 334304F0 0F000000
00003033 33430000 403343F0 0F000000 00004434
33333304 004033F4 0F010000 00402443 44443433
430040F3 0F144400 44111111 21334444 344300F4
0F401111 11111111 11112112 434434F0 0F001411
11111111 11111122 221141F3 1F323311 11111111
11111111 111111F4 1F231111 11111111 11111111
111111F1 0F121211 11111111 11411111 111111F1
2F142113 11112111 11311411 111111F1 1F114212
21114211 11321413 121111F1 4F214321 34214331
11332413 221111F1 4F323442 33443432 22534434
313111F1 4F431343 33873433 33744743 431214F1
4F431334 63543533 33745544 334343F1 0F432434
76E55133 43481145 334343F3 0F004044 764E4534
84E84444 463334F3 0F000040 783E4548 87E834E3
673443F4 0F000000 781E3388 88E831E1 784644F4
0F000000 68E8EE88 88881E8E 787764F4 0F000000
76888887 88888888 787746F4 0F000000 64878888
88888888 774634F3 1F110000 34768878 77888877
664433F3 1F111101 34447688 88786746 443433F3
EFEE1E41 33646666 77664644 433333F3 EFEEEE11
33EE11E1 841E1134 433333F3 0FE0EE1E 3311EE1E
11FF4F44 443333F3 0F101111 E3EEE1EE F1F44F43
433433F3 0F008888 33E1EEEE 31FF4F34 333433F3
FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 00000000`;

function convertFromHexString(input: string): ArrayBuffer {
  const mapFn = (byte: string) => parseInt(byte, 16);
  const bytes = input
    .replace(/\n|\r|\s|\t/g, "")
    .trim()
    .match(/.{1,2}/g);

  if (!bytes) {
    return new Uint8Array(0).buffer;
  }

  const data = bytes.map(mapFn);

  return Uint8Array.from(data).buffer;
}

const testImage = convertFromHexString(testInput);

// =============================================================================
// ByteReader
// =============================================================================

test("reader can read a word", (t) => {
  const reader = new ByteReader(testImage);
  let result = reader.readWord();

  t.is(result, 0x10);
  t.is(reader.position(), 4);

  result = reader.readWord();

  t.is(result, 0x08);
  t.is(reader.position(), 8);
});

test("reader can read a half", (t) => {
  const reader = new ByteReader(testImage);
  let result = reader.readHalf();

  t.is(result, 0x10);
  t.is(reader.position(), 2);

  result = reader.readHalf();
  t.is(result, 0x00);
  t.is(reader.position(), 4);
});

test("reader can read a byte", (t) => {
  const reader = new ByteReader(testImage);

  let result = reader.readByte();

  t.is(result, 0x10);
  t.is(reader.position(), 1);

  result = reader.readByte();

  t.is(result, 0x00);
  t.is(reader.position(), 2);
});

// =============================================================================
// Header
// =============================================================================

test("parseId parses out the correct information", (t) => {
  const reader = new ByteReader(testImage);
  const { id, version, reservedSpace } = parseFormatInfo(reader);

  t.is(id, 0x10, "id is 0x10");
  t.is(version, 0x00, "version is 0x00");
  t.is(reservedSpace, 0x00, "reserved space shouldn't have anything in it");
});

// =============================================================================
// Flags
// =============================================================================

test("parseFlags parses out the correct information", (t) => {
  const reader = new ByteReader(testImage);
  // parse out the header so we're at the right point
  reader.seek(4);

  const { pmode, cf, reservedSpace } = parseFlags(reader);

  t.is(pmode, 0x00, "pmode is 0");
  t.is(cf, 0x01, "cf is 1");
  t.is(reservedSpace, 0x00, "reserved space shouldn't have anything in it");
});

// =============================================================================
// Flags
// =============================================================================

test("parseCLUT parses the correct information", (t) => {
  const reader = new ByteReader(testImage);
  reader.seek(8);

  const { bnum, dx, dy, w, h, clut } = parseClutInfo(reader);

  t.is(bnum, 0x2c, "clut has 44 bytes");
  t.is(dx, 0, "dx is 0");
  t.is(dy, 480, "dy is 480");
  t.is(w, 16, "w is 16");
  t.is(h, 1, "h is 1");

  t.is(clut.length, 16, "there are 16 colours");
});

// =============================================================================
// Pixels
// =============================================================================

test("parsePixels parses the correct information", (t) => {
  const reader = new ByteReader(testImage);
  reader.seek(4);

  const { pmode } = parseFlags(reader);

  reader.seek(44);

  const { bnum, dx, dy, w, h } = parsePixelInfo(reader, pmode);

  t.is(bnum, 0x20c, "pixels have 524 bytes");
  t.is(dx, 0, "dx is 0");
  t.is(dy, 0, "dy is 0");
  t.is(w, 8, "w is 8 (it's actually 32)");
  t.is(h, 32, "h is 32");
});
