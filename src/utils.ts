export function rotateDoors(doors: string, rotation: number): string {
  const allDoors = 'NESW';
  return doors
    .split('')
    .map((door) => {
      const index = (allDoors.indexOf(door) + rotation) % 4;
      return allDoors[index];
    })
    .join('');
}
