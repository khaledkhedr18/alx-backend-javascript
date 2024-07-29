import ClassRoom from './task1.js';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}

console.log(initializeRooms());
