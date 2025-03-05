import { Room } from '@/controllers/level';

export default function RoomUI({ doors, title, index = 0 }: Room) {
  const value = doors.toString(10).padStart(4, '0');

  const x = index % 5;
  const y = Math.floor(index / 5);
  const tx = x * 128 - 64;
  const ty = y * 128 - 64;

  return (
    <div className="room" style={{ transform: `translate(${tx}px, ${ty}px)` }}>
      <h3 className="room__title">{title}</h3>
      <div className={`doors pos_${value}`}></div>
    </div>
  );
}
