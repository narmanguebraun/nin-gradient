import { useRef, useState } from "react"

import { AlertType } from "@/components/AlertIcon"

type AlertState = {
  type: AlertType
}

export function useClipboard() {
  const [alert, setAlert] = useState<AlertState | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const copyToClipboard = async (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    try {
      await navigator.clipboard.writeText(text)
      setAlert({ type: "success" })
      timeoutRef.current = setTimeout(() => setAlert(null), 3000)
    } catch (err) {
      setAlert({ type: "error" })
      console.error("Could not copy text: ", err)
    }
  }

  return { alert, copyToClipboard }
}
