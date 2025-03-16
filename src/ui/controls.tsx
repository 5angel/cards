import { useModelStore } from '@/controllers/model';
import ArrowIcon from '@/icons/arrow-icon';
import PlayerIcon from '@/icons/player-icon';
import { Compass, NESW } from '@/types';

type ControlsProps = {
  doors: NESW | undefined;
};

const checkBit = (value: number | undefined, bit: number) =>
  value != null && (value & (1 << bit)) !== 0;

type ActionButtonProps = {
  arrow: Compass;
  onClick: React.MouseEventHandler;
};

function ActionButton({ arrow, onClick }: ActionButtonProps) {
  const str = arrow.toString(2).padStart(4, '0');
  return (
    <div
      className={`ctrl type_step pos_${str}`}
      data-arrow={str}
      onClick={onClick}
    >
      <ArrowIcon className="ctrl__icon" size={48} />
    </div>
  );
}

export default function Controls({ doors }: ControlsProps) {
  const { action } = useModelStore();

  function actionHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const arrow = parseInt(event.currentTarget.dataset.arrow!, 2) as Compass;
    action(arrow);
  }

  return (
    <div className="controls">
      {checkBit(doors, 3) && (
        <ActionButton arrow={0b1000} onClick={actionHandler} />
      )}
      {checkBit(doors, 2) && (
        <ActionButton arrow={0b0100} onClick={actionHandler} />
      )}
      <div className="ctrl type_base">
        <PlayerIcon className="ctrl__icon" size={48} />
      </div>
      {checkBit(doors, 1) && (
        <ActionButton arrow={0b0010} onClick={actionHandler} />
      )}
      {checkBit(doors, 0) && (
        <ActionButton arrow={0b0001} onClick={actionHandler} />
      )}
    </div>
  );
}
