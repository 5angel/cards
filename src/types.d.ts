export type Way = 0 | 1 | 2 | 3; // NWSE

type Allways =
  | 1
  | 2
  | 3 // 2ways
  | 12
  | 13
  | 23 // 3ways
  | 123;

export type ArrWay = [
  boolean | null,
  boolean | null,
  boolean | null,
  boolean | null,
];

type Resource = 'sanity' | 'key' | 'distance';
type Operator = 'equals';
type Action = 'set';

type Condition = [Resource, Operator, number | string];

type Effect = [Action, Operator, number | string];

type Prompt = {
  title: string;
  effect: Effect[];
  conditions?: Condition[];
  hidden?: boolean;
};

export interface IRarible {
  rarity?: 0 | 1 | 2;
}

export interface IRoom extends IRarible {
  title: string;
  doors?: Allways;
  conditions?: Condition | Condition[];
  effects?: Effect | Effect[];
  prompts?: Prompt[];
  ways?: Allways;
}
