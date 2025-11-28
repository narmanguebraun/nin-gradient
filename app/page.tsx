"use client"

import CodeDisplay from "@/components/CodeDisplay"
import Generator from "@/components/Generator"
import Header from "@/components/Header"
import { useClipboard } from "@/lib/hooks/useClipboard"
import { useGradient } from "@/lib/hooks/useGradient"
import { useColorStore } from "@/lib/stores/color-store"

export default function Home() {
  const { alert, copyToClipboard } = useClipboard()
  const { cssCode, tailwindCode, gradient } = useGradient("background")
  const { color1, color2, direction, updateColor1, updateColor2, updateDirection } = useColorStore()

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-between"
      style={{ background: gradient }}
    >
      <Header />
      <main className="mx-4 max-w-md">
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
