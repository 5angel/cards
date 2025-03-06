export type Directions =
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

export type Arrow = 0b00 | 0b01 | 0b10 | 0b11;

export type Room = {
  doors: Directions;
  locks: Directions;
  title?: string;
  index?: number;
};

export function coords(x: number, y: number) {
  return x.toString(16) + ':' + y.toString(16);
}

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
        doors: 0b0110,
        locks: 0,
        title: 'Crossroads',
      },
    ],
    [
      coords(1, 0),
      {
        doors: 0b1111,
        locks: 0,
        title: 'Derp',
      },
    ],
  ]);

  place(room: Room, x: number, y: number) {
    const id = coords(x, y);
    this.map.set(id, room);
  }

  deal(): Room {
    return {
      doors: 0b1111,
      locks: 0,
      title: '',
    };
  }

  at(position: [number, number]) {
    const [x, y] = position;
    return this.map.get(coords(x, y));
  }

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
