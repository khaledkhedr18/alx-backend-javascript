export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position out of range');
  }
  const dv = new DataView(new ArrayBuffer(length), 0, length);
  dv.setUint8(position, value);
  return dv;
}
