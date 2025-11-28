import ColorPicker from "@/components/ColorPicker"
import DirectionButton from "@/components/DirectionButton"
import { DIRECTIONS } from "@/lib/constants"
import type { Direction } from "@/lib/types/directions"

type GeneratorProps = {
  color1: string
  color2: string
  direction: Direction
  onChangeColor1: (color: string) => void
  onChangeColor2: (color: string) => void
  onClickDirection: (direction: Direction) => void
}

export default function Generator({
  color1,
  color2,
  direction,
  onChangeColor1,
  onChangeColor2,
  onClickDirection
}: GeneratorProps) {
  return (
    <div className="flex w-full justify-center gap-1 p-6">
      <div className="grid grid-cols-1 gap-1">
        <ColorPicker color={color1} onChange={onChangeColor1} />
        <ColorPicker color={color2} onChange={onChangeColor2} />
      </div>
      <div className="grid grid-cols-4 gap-1">
        {DIRECTIONS.map((btn) => (
          <DirectionButton
            key={btn.title}
            title={btn.title}
            icon={btn.icon}
            selected={direction === btn.title}
            onClick={() => onClickDirection(btn.title)}
          />
        ))}
      </div>
    </div>
  )
}
