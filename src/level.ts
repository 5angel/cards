export type Directions =
  | 0
  | 1
  | 10
  | 100
  | 1000
  | 11
  | 101
  | 110
  | 1100
  | 1001
  | 1010
  | 111
  | 1011
  | 1101
  | 1110
  | 1111;

export type Arrow = 0 | 1 | 10 | 11;

export type Room = {
  doors: Directions;
  locks: Directions;
  title?: string;
};

type ScanLine = [
  Room | null,
  Room | null,
  Room | null,
  Room | null,
  Room | null,
];

type ScanView = [ScanLine, ScanLine, ScanLine, ScanLine, ScanLine];

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

  private map: Map<string, Room> = new Map();

  place(room: Room, x: number, y: number) {
    const id = coords(x, y);
    this.map.set(id, room);
  }

  deal(): Room {
    return {
      doors: 1111,
      locks: 0,
      title: '',
    };
  }

  at(x: number, y: number) {
    return this.map.get(coords(x, y));
  }

  view(cx: number, cy: number): ScanView {
    const sx = cx - 2;
    const sy = cy - 2;

    return new Array(5).fill(null).map((_, i) => {
      const y = sy + i;
      return new Array(5).fill(null).map((_, j) => {
        const x = sx + j;
        return this.at(x, y) ?? null;
      });
    }) as ScanView;
  }
}
