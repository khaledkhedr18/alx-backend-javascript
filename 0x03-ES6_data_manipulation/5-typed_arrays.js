export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position out of range');
  }
  const dv = new DataView(new ArrayBuffer(length), 0, length);
  dv.setUInt8(position, value);
  return dv;
}
