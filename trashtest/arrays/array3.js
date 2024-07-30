export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position out of range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  return view;
}

console.log(createInt8TypedArray(10, 2, 89));
