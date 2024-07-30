const buffer1 = new ArrayBuffer(16);

if (buffer1.byteLength === 16) {
  //   console.log(`buffer1 is 16 bytes long`);
} else {
  //   console.log('buffer1 is not 16 bytes long');
}

const int32View = new Int32Array(buffer1);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

// console.log(int32View);

const int16View = new Int16Array(buffer1);

for (let i = 0; i < int16View.length; i++) {
  //   console.log(`Entry ${i} is ${int16View[i]}`);
}

// console.log(int16View);
int16View[0] = 32;
// console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);

const float32View = new Float32Array(buffer1);

console.log(float32View[0]);
