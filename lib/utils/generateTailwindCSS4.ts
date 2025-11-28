import type { Direction } from "@/lib/types/directions"

const generateTailwindCSS4 = (
  direction: Direction,
  color1: string,
  color2: string,
  type: "background" | "text" = "background"
) => {
  const directionClassMap: Record<Direction, string> = {
    "to top": "bg-linear-to-t",
    "to top right": "bg-linear-tr",
    "to right": "bg-linear-to-r",
    "to bottom right": "bg-linear-to-br",
    "to bottom": "bg-linear-to-b",
    "to bottom left": "bg-linear-to-bl",
    "to left": "bg-linear-to-l",
    "to top left": "bg-linear-to-tl"
  }

  const directionClass = directionClassMap[direction] // No fallback needed with proper typing
  const baseClasses = `${directionClass} from-[${color1}] to-[${color2}]`

  if (type === "text") {
    return `${baseClasses} bg-clip-text text-transparent`
  }

  return baseClasses
}

export default generateTailwindCSS4
