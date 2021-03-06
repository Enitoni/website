import { useRef, useEffect } from "react"
import { IS_SERVER } from "../../../modules/core/constants"

export const useUniversalEffect = (callback: () => void | (() => void), deps?: any[]) => {
  const ref = useRef(false)

  if (IS_SERVER) {
    if (!ref.current) {
      callback()
      ref.current = true
    }
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(callback, deps)
  }
}
