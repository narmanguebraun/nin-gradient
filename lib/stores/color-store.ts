import type { Direction } from "@/lib/types/directions"
import { create } from "zustand"

export type ColorState = {
  color1: string
  color2: string
  direction: Direction
}

export type ColorAction = {
  updateColor1: (color1: ColorState["color1"]) => void
  updateColor2: (color2: ColorState["color2"]) => void
  updateDirection: (direction: Direction) => void
}

export type ColorStore = ColorState & ColorAction

export const useColorStore = create<ColorStore>((set) => ({
  color1: "#92afac",
  color2: "#1d31ae",
  direction: "to bottom",
  updateColor1: (color1) => set(() => ({ color1: color1 })),
  updateColor2: (color2) => set(() => ({ color2: color2 })),
  updateDirection: (direction) => set(() => ({ direction: direction }))
}))
