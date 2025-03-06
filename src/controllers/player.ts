import { Arrow } from './level';

function arrowToVector(arrow: Arrow): [number, number] {
  switch (arrow) {
    case 0b00:
      return [0, -1];
    case 0b01:
      return [1, 0];
    case 0b10:
      return [0, 1];
    case 0b11:
      return [-1, 0];
  }
}

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

  step(arrow: Arrow) {
    const [x, y] = arrowToVector(arrow);
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
