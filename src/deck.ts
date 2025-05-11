import { IRarible, IRoom } from './types';

export const DECK: IRoom[] = [
  {
    title: 'test',
    rarity: 0,
    doors: 123,
    effects: [],
    prompts: [],
    conditions: [],
  },
  // More predefined rooms will be added here
];

export default class Deck<T extends IRarible> {
  pool: T[];
  total: number = 0;
  cum: number[] = [];

  constructor(
    initial: T[],
    private weights = [10, 4, 1]
  ) {
    this.pool = initial.slice();
    this.balance();
  }

  balance() {
    this.cum = this.pool.map((card) => {
      const weight = this.weights[card.rarity ?? 0] ?? 0;
      return this.total + weight;
    }, 0);

    this.total = this.cum[this.cum.length - 1];
  }

  remove(card: T) {
    const index = this.pool.indexOf(card);

    if (index !== -1) {
      this.pool.splice(index, 1);
      this.balance();
    }
  }

  pull(discard: boolean = true, simulate: boolean = true, times: number = 3) {
    const roll = Math.random() * this.total;

    let idx = 0;
    while (roll >= this.cum[idx]) idx++;

    const backup = this.pool.slice();

    const result = new Array(times).fill(null).map(() => {
      switch (this.pool.length) {
        case 1:
          return this.pool[0];
        case 0:
          return null;
        default:
          break;
      }

      const card = discard ? this.pool.splice(idx, 1)[0] : this.pool[idx];

      if (discard) {
        this.balance();
      }

      return card;
    });

    if (simulate) {
      this.pool = backup;
      this.balance();
    }

    return result;
  }
}
