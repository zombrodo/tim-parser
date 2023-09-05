import test from "ava";
import { ByteReader } from "./reader";
import { fourBitCLUTImage } from "./testData.test";

test("reader can read a word", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);
  let result = reader.readWord();

  t.is(result, 0x10);
  t.is(reader.position(), 4);

  result = reader.readWord();

  t.is(result, 0x08);
  t.is(reader.position(), 8);
});

test("reader can read a half", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);
  let result = reader.readHalf();

  t.is(result, 0x10);
  t.is(reader.position(), 2);

  result = reader.readHalf();
  t.is(result, 0x00);
  t.is(reader.position(), 4);
});

test("reader can read a byte", (t) => {
  const reader = new ByteReader(fourBitCLUTImage);

  let result = reader.readByte();

  t.is(result, 0x10);
  t.is(reader.position(), 1);

  result = reader.readByte();

  t.is(result, 0x00);
  t.is(reader.position(), 2);
});