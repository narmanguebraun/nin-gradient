import { useState } from "react"

import AlertIcon, { type AlertType } from "@/components/AlertIcon"
import { CopyIcon } from "@/components/Icons"
import { motion } from "framer-motion"

type CodeType = "css" | "tailwind"

type CodeDisplayProps = {
  cssCode: string
  tailwindCode: string
  alert: { type: AlertType } | null
  onCopy: (code: string) => void
}

function TabButton({
  active,
  onClick,
  children
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`cursor-pointer rounded px-2 py-1 text-xs transition-colors ${
        active ? "text-rose-400" : "text-white hover:border-rose-400 hover:text-rose-400"
      }`}
    >
      {children}
    </button>
  )
}

export default function CodeDisplay({ cssCode, tailwindCode, alert, onCopy }: CodeDisplayProps) {
  const [activeTab, setActiveTab] = useState<CodeType>("css")

  const currentCode = activeTab === "tailwind" ? tailwindCode : cssCode

  const copyTitle = activeTab === "css" ? "Copy CSS Code" : "Copy Tailwind CSS Code"

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      setActiveTab("css")
    } else if (e.key === "ArrowRight") {
      setActiveTab("tailwind")
    }
  }

  return (
    <motion.div layout className="m-auto max-w-sm rounded-lg border border-current">
      <header className="flex w-full items-center justify-between px-4 py-3">
        <div role="tablist" onKeyDown={handleKeyDown} className="flex items-center gap-2">
          <TabButton active={activeTab === "css"} onClick={() => setActiveTab("css")}>
            CSS
          </TabButton>
          <TabButton active={activeTab === "tailwind"} onClick={() => setActiveTab("tailwind")}>
            Tailwind CSS 4
          </TabButton>
        </div>
        {alert ? (
          <AlertIcon type={alert.type} />
        ) : (
          <button
            title={copyTitle}
            onClick={() => onCopy(currentCode)}
            className="cursor-pointer text-white hover:text-rose-400"
          >
            <CopyIcon />
          </button>
        )}
      </header>
      <pre className="overflow-auto rounded-b-lg bg-black p-4">
        <code className="text-xs">{currentCode}</code>
      </pre>
    </motion.div>
  )
}
