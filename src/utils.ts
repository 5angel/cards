import { Compass, Cross } from './types';

export function arrowToVector(arrow: Compass): [number, number] {
  switch (arrow) {
    case 0b1000:
      return [0, -1];
    case 0b0100:
      return [1, 0];
    case 0b0010:
      return [0, 1];
    case 0b0001:
      return [-1, 0];
    default:
      return [0, 0];
  }
}

export function coords(x: number, y: number) {
  return x.toString(16) + ':' + y.toString(16);
}

// Helper function to get the opposite direction
export function flipDirection(arrow: Compass): Compass {
  return {
    [0b1000]: 0b0010,
    [0b0100]: 0b0001,
    [0b0010]: 0b1000,
    [0b0001]: 0b0100,
  }[arrow] as Compass;
}

export function rotateDirection(value: Cross, clockwise: boolean = true) {
  if (clockwise) {
    return (((value >> 1) | ((value & 1) << (4 - 1))) &
      ((1 << 4) - 1)) as Cross;
  }
  return (((value << 1) | (value >> (4 - 1))) & ((1 << 4) - 1)) as Cross;
}

export function align(value: Cross, arrow: Compass) {
  let result = value;

  const cw = Boolean(Math.round(Math.random() * 1));

  for (let i = 0; i < 4; i++) {
    // At most 4 rotations needed
    if ((result & arrow) !== 0) return result; // If matching bit found, return
    result = rotateDirection(result, cw);
  }

  return result;
}

export function split(value: Cross) {
  const result = [];

  for (let i = 0; i < 4; i++) {
    const bit = (value >> i) & 1;
    if (bit > 0) {
      result.push(1 << i);
    }
  }

  return result as Compass[];
}
