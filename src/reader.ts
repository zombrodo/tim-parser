/**
 * A ByteReader is a class that takes in an ArrayBuffer, and returns a
 * class that allows you to traverse it byte by byte in the forward direction.
 *
 * The methods all parse numbers as little endian values, as per the PSX arch.
 */
export class ByteReader {
  private currentIndex: number;
  private data: DataView;

  constructor(data: ArrayBuffer) {
    this.currentIndex = 0;
    this.data = new DataView(data);
  }

  /**
   * Reads four bytes of information, and returns it as a uint32 number
   * @returns number
   */
  readWord() {
    const result = this.data.getUint32(this.currentIndex, true);
    this.currentIndex += 4;
    return result;
  }

  /**
   * Reads two bytes of information, and returns it as a uint16 number
   * @returns number
   */
  readHalf() {
    const result = this.data.getUint16(this.currentIndex, true);
    this.currentIndex += 2;
    return result;
  }

  /**
   * Reads a byte of information and returns it as a uint8 number
   * @returns number
   */
  readByte() {
    const result = this.data.getUint8(this.currentIndex);
    this.currentIndex += 1;
    return result;
  }

  /**
   * Moves the reader forward `position` bytes from its current location.
   *
   * @param position
   */
  seek(position: number) {
    this.currentIndex = Math.min(
      this.currentIndex + position,
      this.data.byteLength
    );
  }

  /**
   * Returns the current position of the reader
   * @returns number
   */
  position() {
    return this.currentIndex;
  }
}
