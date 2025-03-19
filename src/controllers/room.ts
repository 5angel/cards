import Compass, { Ways } from '@/compass';
import { Corner } from '@/types';

export type RoomConfig = {
  locks: Corner | null;
  doors?: Ways | null;
  title?: string | null;
  color?: string | null;
  index?: number;
};

const DOOR_VARIANTS: Ways[] = [0b1000, 0b1010, 0b1100, 0b1110, 0b1111];

export default class Room {
  private _locks: Corner | null;
  private _doors: Compass | null;
  private _title: string | null;
  private _color: string | null;

  constructor({
    locks = null,
    doors = null,
    title = null,
    color = null,
  }: RoomConfig) {
    this._locks = locks;
    this._doors = doors != null ? new Compass(doors) : null;
    this._title = title;
    this._color = color;
  }

  get blank() {
    return this._doors == null;
  }

  get locks() {
    return this._locks;
  }

  get doors() {
    return this._doors;
  }

  valueOf(): RoomConfig {
    return {
      locks: this._locks,
      doors: this._doors != null ? this._doors.valueOf() : null,
      title: this._title,
      color: this._color,
    };
  }
}
