type ColorPickerProps = {
  color: string
  onChange: (color: string) => void
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Choose color"
      title="Choose color"
      className="h-12 w-12 cursor-pointer bg-transparent [&::-moz-color-swatch]:rounded-full [&::-moz-color-swatch]:border [&::-moz-color-swatch]:border-current [&::-moz-color-swatch-wrapper]:p-px [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border [&::-webkit-color-swatch]:border-current [&::-webkit-color-swatch-wrapper]:p-px"
    />
  )
}
