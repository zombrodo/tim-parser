import test from "ava";
import { ByteReader } from "./reader";
import {
  parseClutInfo,
  parseFlags,
  parseFormatInfo,
  parsePixelInfo,
} from "./parse";
import { eightBitCLUTImage, fourBitCLUTImage } from "./testData.test";

// =============================================================================
// Header
// =============================================================================

test("parseId parses out the correct information", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);
  const { id, version, reservedSpace } = parseFormatInfo(reader);

  t.is(id, 0x10, "id is 0x10");
  t.is(version, 0x00, "version is 0x00");
  t.is(reservedSpace, 0x00, "reserved space shouldn't have anything in it");
});

// =============================================================================
// Flags
// =============================================================================

test("parseFlags parses out the correct information on a four-bit CLUT", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);
  // parse out the header so we're at the right point
  reader.seek(4);

  const { pmode, cf, reservedSpace } = parseFlags(reader);

  t.is(pmode, 0x00, "pmode is 0");
  t.is(cf, 0x01, "cf is 1");
  t.is(reservedSpace, 0x00, "reserved space shouldn't have anything in it");
});

test("parseFlags parses out the correct information on a eight-bit CLUT", (t) => {
  const reader = new ByteReader(eightBitCLUTImage);
  // parse out the header so we're at the right point
  reader.seek(4);

  const { pmode, cf, reservedSpace } = parseFlags(reader);

  t.is(pmode, 0x01, "pmode is 1");
  t.is(cf, 0x01, "cf is 1");
  t.is(reservedSpace, 0x00, "reserved space shouldn't have anything in it");
});

// =============================================================================
// CLUT
// =============================================================================

test("parseCLUT parses the correct information on a four-bit CLUT", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);
  reader.seek(8);

  const { bnum, dx, dy, w, h, clut } = parseClutInfo(reader);

  t.is(bnum, 0x2c, "clut has 44 bytes");
  t.is(dx, 0, "dx is 0");
  t.is(dy, 480, "dy is 480");
  t.is(w, 16, "w is 16");
  t.is(h, 1, "h is 1");

  t.is(clut.length, 16, "there are 16 colours");
});

test("parseCLUT parses the correct information on a eight-bit CLUT", (t) => {
  const reader = new ByteReader(eightBitCLUTImage);
  reader.seek(8);

  const { bnum, dx, dy, w, h, clut } = parseClutInfo(reader);

  t.is(bnum, 0x020c, "clut has 524 bytes");
  t.is(dx, 0, "dx is 0");
  t.is(dy, 480, "dy is 480");
  t.is(w, 256, "w is 256");
  t.is(h, 1, "h is 1");

  t.is(clut.length, 256, "there are 256 colours");
});

// =============================================================================
// Pixels
// =============================================================================

test("parsePixels parses the correct information on a four-bit CLUT", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);
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

test("parsePixels parses the correct information on an eight-bit CLUT", (t) => {
  const reader = new ByteReader(eightBitCLUTImage);
  reader.seek(4);

  const { pmode } = parseFlags(reader);

  reader.seek(524);

  const { bnum, dx, dy, w, h } = parsePixelInfo(reader, pmode);

  t.is(bnum, 0x1E4A, "pixels have 7754 bytes");
  t.is(dx, 0, "dx is 0");
  t.is(dy, 0, "dy is 0");
  t.is(w, 49, "w is 49 (it's actually 196)");
  t.is(h, 79, "h is 79");
});
