import Compass, { Ways } from '@/compass';
import { Room } from '@/types';
import { coords } from '@/utils';

const DOOR_VARIANTS: Ways[] = [0b1000, 0b1010, 0b1100, 0b1110, 0b1111];

export default class Level {
  private static instance: Level = new Level();

  static getInstance() {
    return this.instance;
  }

  constructor() {
    if (Level.instance != null) {
      throw new TypeError('Trying to initiate a singleton twice');
    }
  }

  private map: Map<string, Room> = new Map([
    [
      coords(0, 0),
      {
        doors: 0b0100,
        locks: 0b01,
        title: 'Entrance',
      },
    ],
  ]);

  at([x, y]: [number, number]) {
    return this.map.get(coords(x, y));
  }

  check(position: [number, number]) {
    const room = this.at(position);

    if (room != null) {
      return room.doors != null;
    }

    return false;
  }

  peek(where: Compass) {}

  view(position: [number, number]): (Room | null)[] {
    const [cx, cy] = position;
    const sx = cx - 2;
    const sy = cy - 2;

    return new Array(5)
      .fill(null)
      .map((_, i) => {
        const y = sy + i;
        return new Array(5).fill(null).map((_, j) => {
          const x = sx + j;
          return this.at([x, y]) ?? null;
        });
      })
      .reduce((acc, list) => {
        return acc.concat(list);
      }, []);
  }
}
