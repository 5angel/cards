type LocksUIProps = {};

const STARTX = 84 - 1;
const STARTY = 28 - 1;
const STEP = 128;

const COUNT = 12;

const Rows: React.FC<{ flip?: boolean }> = ({ flip }) => {
  return new Array(COUNT).fill(null).map((_, index) => {
    const length = flip ? 4 : 3;
    const row = Math.floor(index / length);
    const col = index % length;
    const sx = flip ? STARTY : STARTX;
    const sy = flip ? STARTX : STARTY;
    const x = sx + col * STEP;
    const y = sy + row * STEP;
    const width = flip ? 10 : 26;
    const height = flip ? 26 : 10;

    return <rect width={width} height={height} x={x} y={y} key={index} />;
  });
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
