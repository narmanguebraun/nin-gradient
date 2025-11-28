import { useColorStore } from "@/lib/stores/color-store"
import generateTailwindCSS4 from "@/lib/utils/generateTailwindCSS4"

export function useGradient(type = "background") {
  const { color1, color2, direction } = useColorStore()

  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`

  const cssCode =
    type === "text"
      ? `background: ${gradient}; background-clip: text; -webkit-background-clip: text; color: transparent;`
      : `background: ${gradient};`

  const tailwindCode = generateTailwindCSS4(
    direction,
    color1,
    color2,
    type as "background" | "text"
  )

  return { cssCode, tailwindCode, gradient } // ← Add gradient here
}
