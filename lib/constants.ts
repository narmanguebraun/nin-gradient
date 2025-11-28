import type { ComponentType } from "react"

import {
  ArrowBottomIcon,
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon
} from "@/components/Icons"
import type { Direction } from "@/lib/types/directions"

// No JSX brackets: component reference, not element

export const DIRECTIONS: Array<{ title: Direction; icon: ComponentType }> = [
  { title: "to top", icon: ArrowTopIcon },
  { title: "to top right", icon: ArrowTopRightIcon },
  { title: "to right", icon: ArrowRightIcon },
  { title: "to bottom right", icon: ArrowBottomRightIcon },
  { title: "to bottom", icon: ArrowBottomIcon },
  { title: "to bottom left", icon: ArrowBottomLeftIcon },
  { title: "to left", icon: ArrowLeftIcon },
  { title: "to top left", icon: ArrowTopLeftIcon }
]
