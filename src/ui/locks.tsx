import Level from "@/controllers/level";
import Player from "@/controllers/player";

type LocksUIProps = {};

const STARTX = 84 - 1;
const STARTY = 28 + 128 - 1;
const STEP = 128;

const level = Level.getInstance();
const player = Player.getInstance();

const Rows: React.FC<{ flip?: boolean }> = ({ flip }) => {
  const [px, py] = player.where();

  return level.view([px, py]).map((room, index) => {
    if (room == null) {
      return null;
    }

    const col = px - 1 + (index % 5);
    const row = py - 1 + Math.floor(index / 5);
    const tip = flip ? row : col;
    const toofar = row > 2 || col > 2 || tip < 0

    if (toofar) {
      return null;
    }

    const lock = flip ? room.locks & 0b01 : room.locks & 0b10;

    if (lock === 0) {
      return null;
    }

    const sx = flip ? STARTY : STARTX;
    const sy = flip ? STARTX : STARTY;
    const x = sx + col * STEP;
    const y = sy + row * STEP;
    const width = flip ? 10 : 26;
    const height = flip ? 26 : 10;

    return <rect width={width} height={height} x={x} y={y} key={index} />;
  }).filter(node => node != null);
};

export default function LocksUI({}: LocksUIProps) {

  return (
    <svg
      className="locks"
      width="448"
      height="448"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rows />
      <Rows flip />
    </svg>
  );
}
