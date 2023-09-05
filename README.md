# TIM Parser

A parser for the PSX TIM image format,

It has currently been tested with 4-bit CLUT images, and 8-bit CLUT images,
however not exhaustively. If, in the process of using this, you find a bug,
please open an issue with a test image so that I can fix.

Does not support parsing TIM files with the Mixed `pmode`.

## Install

```
yarn add @zombrodo/tim-parser
```

## Usage

This library exposes one function, `parse` which takes in an `ArrayBuffer` and
returns a `TimImage` object.

```ts
import { parse } from "tim-parser";

function parseFile(blob: Blob) {
  return parse(blob.arrayBuffer());
}
```
