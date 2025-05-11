export class Point {
  static delta(dir: number) {
    const [x, y] = [
      [0, 1], // North
      [1, 0], // East
      [0, -1], // South
      [-1, 0], // West
    ][dir] as [number, number];
    return new Point(x, y);
  }

  constructor(
    private x: number,
    private y: number
  ) {}

  coords(): string {
    return `${this.x}:${this.y}`;
  }

  xy() {
    return [this.x, this.y];
  }

  lockAt(dir: number): string {
    const delta = Point.delta(dir);
    return this.times(2).plus(delta).coords();
  }

  times(value: number) {
    return new Point(this.x * value, this.y * value);
  }

  plus(value: Point) {
    const [x, y] = value.xy();
    return new Point(this.x + x, this.y + y);
  }
}
