import Compass from '@/compass';

export default class Player {
  private static instance: Player = new Player();

  static getInstance() {
    return this.instance;
  }

  constructor() {
    if (Player.instance != null) {
      throw new TypeError('Trying to initiate a singleton twice');
    }
  }

  private position: [number, number] = [0, 0];

  step(where: Compass) {
    const [x, y] = where.toVector();
    return this.move(x, y);
  }

  move(x: number, y: number) {
    const [px, py] = this.position;
    this.position = [px + x, py + y];
    return this.where();
  }

  teleport(x: number, y: number) {
    this.position = [x, y];
    return this.where();
  }

  where() {
    return this.position.slice() as [number, number];
  }
}
