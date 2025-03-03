type RoomProps = {
  doors: number;
};

export default function Room({ doors }: RoomProps) {
  const value = doors.toString(10).padStart(4, '0');
  return (
    <div className="room">
      {/* <h3 className="room__title">Crossroads</h3> */}
      <div className={`doors pos_${value}`}></div>
    </div>
  );
}
