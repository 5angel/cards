import { Allways, Way } from './types';

export function rotate(rot: Way, ways?: Allways): string {
  const arr = ways != null ? ways.toString(10).split('').concat('0') : ['0'];

  return arr
    .map((value) => {
      const next = (parseInt(value, 10) + rot) % 4;
      return next.toString(10);
    })
    .join('');
}
