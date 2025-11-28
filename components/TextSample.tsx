import type { Direction } from "@/lib/types/directions"

type TextSampleProps = {
  direction: Direction
  color1: string
  color2: string
  text: string
  onChange: (text: string) => void
}

export default function TextSample({ text, onChange, direction, color1, color2 }: TextSampleProps) {
  return (
    <div className="space-y-6">
      <div
        className="bg-clip-text text-center text-4xl font-bold -tracking-widest text-transparent"
        style={{
          backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`
        }}
      >
        {text}
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Type here to preview text"
        title="Type here to preview text"
        placeholder="Type here to preview text"
        className="w-full rounded-lg border border-current bg-transparent px-4 py-3 text-center focus:text-current outline-none focus:ring-2 focus:ring-rose-400"
      />
    </div>
  )
}
