import  { Arrow, Directions } from "@/controllers/level";
import { useModelStore } from "@/controllers/model";


type ControlsProps = {
  doors: Directions
}

const checkBit = (value: number, bit: number) => (value & (1 << bit)) !== 0

type ActionButtonProps = {
  arrow: Arrow;
  onClick: React.MouseEventHandler;
}

function ActionButton({ arrow, onClick }: ActionButtonProps) {
  const str = arrow.toString(2).padStart(2, '0')
  return (
    <button className={`ctrl type_lock pos_${str}`} data-arrow={str} onClick={onClick}>Locked</button>
  )
}

export default function Controls({ doors }: ControlsProps) {
  const { step } = useModelStore()

  function actionHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const arrow = parseInt(event.currentTarget.dataset.arrow!, 2) as Arrow;
    step(arrow);
  }

  return (
    <div className="controls">
      { checkBit(doors, 3) && <ActionButton arrow={0b00} onClick={actionHandler}  /> }
      { checkBit(doors, 2) && <ActionButton arrow={0b01} onClick={actionHandler} />  }
      <button className="ctrl type_base"></button>
      { checkBit(doors, 1) && <ActionButton arrow={0b10} onClick={actionHandler}/> }
      { checkBit(doors, 0) && <ActionButton arrow={0b11} onClick={actionHandler} /> }
    </div>
  );
}
