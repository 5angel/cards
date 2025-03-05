import Level from './level';

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

  private level = Level.getInstance();
  private position: [number, number] = [0, 0];

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
    return this.position.slice();
  }
}
