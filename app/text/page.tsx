"use client"

import CodeDisplay from "@/components/CodeDisplay"
import Generator from "@/components/Generator"
import Header from "@/components/Header"
import TextSample from "@/components/TextSample"
import { useClipboard } from "@/lib/hooks/useClipboard"
import { useGradient } from "@/lib/hooks/useGradient"
import { useColorStore } from "@/lib/stores/color-store"
import { useTextStore } from "@/lib/stores/text-store"

export default function Text() {
  const { alert, copyToClipboard } = useClipboard()
  const { cssCode, tailwindCode } = useGradient("text")
  const { color1, color2, direction, updateColor1, updateColor2, updateDirection } = useColorStore()
  const { text, updateText } = useTextStore()

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between bg-[#090909]">
      <Header />

      <main className="max-w-sm flex flex-col gap-2">
        <TextSample
          text={text}
          onChange={updateText}
          direction={direction}
          color1={color1}
          color2={color2}
        />
        <CodeDisplay
          cssCode={cssCode}
          tailwindCode={tailwindCode}
          alert={alert}
          onCopy={copyToClipboard}
        />
      </main>
      <Generator
        color1={color1}
        color2={color2}
        direction={direction}
        onChangeColor1={updateColor1}
        onChangeColor2={updateColor2}
        onClickDirection={updateDirection}
      />
    </div>
  )
}
