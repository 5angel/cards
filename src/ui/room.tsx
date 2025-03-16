import { Room } from '@/types';
import classNames from 'classnames';

const toBString = (value: number) => value.toString(2).padStart(4, '0');

type CellUIProps = {
  index: number;
  offset: number;
  className?: string;
  children?: React.ReactNode;
};

function CellUI({ index, offset, className, children }: CellUIProps) {
  const x = index % 5;
  const y = Math.floor(index / 5);
  const tx = x * 128 - offset;
  const ty = y * 128 - offset;

  return (
    <div
      className={className}
      style={{ transform: `translate(${tx}px, ${ty}px)` }}
    >
      {children}
    </div>
  );
}

export default function RoomUI({ doors, title, index = 0 }: Room) {
  const rootClassName = classNames('room', {
    blank: doors == null,
  });

  return (
    <CellUI index={index} offset={96} className={rootClassName}>
      {title != null && <h3 className="room__title">{title}</h3>}
      {doors != null && doors > 0 && (
        <div className={`doors mask_${toBString(doors)}`}></div>
      )}
    </CellUI>
  );
}
