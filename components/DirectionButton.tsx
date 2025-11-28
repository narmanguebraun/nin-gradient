import { ComponentType } from "react"

export type DirectionButtonProps = {
  title: string
  icon: ComponentType // Not ReactElement
  selected: boolean
  onClick: () => void
}

export default function DirectionButton({
  title,
  icon: Icon, // Component type
  selected,
  onClick
}: DirectionButtonProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      aria-label={title}
      aria-pressed={selected}
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-current text-current focus:ring-2 focus:ring-rose-400 focus:outline-none ${
        selected ? "text-rose-400" : "hover:text-rose-400"
      }`}
    >
      <Icon /> {/* Render fresh element here */}
    </button>
  )
}
