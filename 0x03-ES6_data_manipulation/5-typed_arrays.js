export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const dv = new DataView(new ArrayBuffer(length), 0, length);
  dv.setUint8(position, value);
  return dv;
}
