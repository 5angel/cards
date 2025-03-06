import { create } from 'zustand';
import Level, { Arrow, Room } from './level';
import Player from './player';

type Model = {
  view: (Room | null)[];
  target: Room;
  position: [number, number];
  step: (arrow: Arrow) => void;
};

export const useModelStore = create<Model>((set) => {
  const level = Level.getInstance();
  const player = Player.getInstance();
  const position = player.where();
  const view = level.view(position);
  const target = level.at(position)!;

  return {
    view,
    target,
    position,
    step: (arrow: Arrow) =>
      set(() => {
        const next = player.step(arrow);

        return {
          view: level.view(next),
          target: level.at(next),
          position: next,
        };
      }),
  };
});
