import Deck, { DECK } from './deck';
import { Point } from './point';
import { Way, Resource, IRoom, ArrWay } from './types';
import { rotate } from './utils';

const DEADEND: IRoom = {
  title: 'deadend',
  rarity: 0,
};

const ENTRANCE: IRoom = {
  title: 'entrance',
  ways: 13,
  rarity: 0,
};

export default class Controller {
  private position: Point = new Point(0, 0);
  private sanity: number = 100;
  private pockets: Resource[] = [];
  private deck = new Deck<IRoom>(DECK);
  private board: Record<string, [IRoom, Way]> = {
    '0:0': [ENTRANCE, 0],
  };
  private locks: Record<string, number> = {};
  private hand: (IRoom | null)[] = [];

  constructor() {}

  move(dir: Way) {
    this.position = Point.delta(dir).plus(this.position);
    this.sanity--;
  }

  teleport(x: number, y: number) {
    this.position = new Point(x, y);
  }

  getWays(): ArrWay {
    const coords = this.position.coords();
    const [room, rot] = this.board[coords];
    const adjusted = rotate(rot, room.ways);

    return adjusted
      .split('')
      .map((value) => parseInt(value, 10))
      .reduce<ArrWay>(
        (acc, value) => {
          acc[value] = true;
          return acc;
        },
        [null, null, null, null]
      );
  }

  draw() {
    this.hand = this.deck.pull();
  }

  place(index: number, dir: Way) {
    const chosen = this.hand[index];
    this.hand = [];

    if (chosen != null) {
      this.deck.remove(chosen);
    }

    const coords = this.position.plus(Point.delta(dir)).coords();

    this.board[coords] = chosen != null ? [chosen, dir] : [DEADEND, dir];
  }
}
