export type Ways =
  | 0b0000
  | 0b0001
  | 0b0010
  | 0b0100
  | 0b1000
  | 0b0011
  | 0b0101
  | 0b0110
  | 0b1100
  | 0b1001
  | 0b1010
  | 0b0111
  | 0b1011
  | 0b1101
  | 0b1110
  | 0b1111;

export default class Compass {
  constructor(value: Ways | Compass) {
    this.value = value instanceof Compass ? value.value : value;
  }

  private value: Ways;

  get top() {
    return this.value === 0b1000;
  }

  get right() {
    return this.value === 0b0100;
  }

  get bottom() {
    return this.value === 0b0010;
  }

  get left() {
    return this.value === 0b0001;
  }

  flip() {
    const next = ((this.value & 0b0101) << 1) | ((this.value & 0b1010) >> 1);
    return new Compass(next as Ways);
  }

  rotate(cw: boolean = true) {
    const next = cw
      ? ((this.value >> 1) | ((this.value & 1) << 3)) & 0b1111
      : ((this.value << 1) | (this.value >> 3)) & 0b1111;

    return new Compass(next as Ways);
  }

  align(
    to: Compass,
    cw: boolean = Boolean(Math.round(Math.random()))
  ): Compass {
    return (this.value & to.value) !== 0
      ? new Compass(this)
      : this.rotate(cw).align(to, cw);
  }

  split(): Compass[] {
    return this.value
      .toString(2)
      .padStart(4, '0')
      .split('')
      .reverse()
      .reduce<Compass[]>((acc, bit, i) => {
        if (bit === '1') {
          return acc.concat(new Compass((1 << i) as Ways));
        }
        return acc;
      }, []);
  }

  toVector(): [number, number] {
    switch (this.value) {
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

  valueOf() {
    return this.value;
  }
}
