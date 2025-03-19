import { Ways } from './compass';

export type Corner = 0b00 | 0b01 | 0b10 | 0b11;

export type Room = {
  locks: Corner;
  doors?: Ways;
  title?: string;
  index?: number;
  color?: string;
};
