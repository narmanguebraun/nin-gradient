import { create } from "zustand"

export type TextState = {
  text: string
}

export type TextAction = {
  updateText: (text: TextState["text"]) => void
}

export type TextStore = TextState & TextAction

export const useTextStore = create<TextStore>((set) => ({
  text: "That fine line between discipline and freedom ",
  updateText: (text) => set(() => ({ text: text }))
}))
