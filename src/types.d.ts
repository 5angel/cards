export type Cross =
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

export type Corner = 0b00 | 0b01 | 0b10 | 0b11;

export type Compass = 0b0001 | 0b0010 | 0b0100 | 0b1000;

export type Room = {
  doors?: Cross;
  locks?: Corner;
  title?: string;
  index?: number;
  color?: string;
};
