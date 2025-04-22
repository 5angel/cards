export type ConditionVariant =
  | 'has'
  | 'higher'
  | 'lower'
  | 'roomPresent'
  | 'sanityCriteria'
  | 'effectActive'
  | 'playerInventory';
export type EffectVariant = 'add' | 'remove';
export type Resource = 'key' | 'sanity' | 'roomCard' | 'distance';

export type RoomRarity = 'common' | 'standard' | 'unusual' | 'rare';

export type RoomEffect = [EffectVariant, Resource, number | string];
export type RoomCondition = [ConditionVariant, Resource, number | string];

export type RoomAction = {
  name: string;
  visible: boolean;
  conditions: RoomCondition[];
  effect: RoomEffect[];
  prompt: string;
};

export type Room = {
  id: string;
  rarity: RoomRarity;
  doors: number[];
  effects: RoomEffect[];
  actions: RoomAction[];
  conditions: RoomCondition[];
};
