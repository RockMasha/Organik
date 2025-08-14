import { useCallback, useEffect, useState } from 'react'

function useOpen() {
  const [windowWidth, setWindowWidth] = useState<number>(
    () => window.innerWidth
  )
  const [open, setOpen] = useState<boolean>(() => false)

  const isChangeToPhone = useCallback(() => {
    const prevWidthIsPhone = isPhoneWidth(windowWidth)
    const windowWidthIsPhone = isPhoneWidth(window.innerWidth)
    return prevWidthIsPhone !== windowWidthIsPhone && windowWidthIsPhone
  }, [windowWidth])

  const isChangeToDesktop = useCallback(() => {
    const prevWidthIsPhone = isPhoneWidth(windowWidth)
    const windowWidthIsPhone = isPhoneWidth(window.innerWidth)
    return prevWidthIsPhone !== windowWidthIsPhone && !windowWidthIsPhone
  }, [windowWidth])

  useEffect(() => {
    const handleResize = () => {
      if (isChangeToPhone()) {
        setOpen(false)
      } else if (isChangeToDesktop()) {
        setOpen(true)
      }
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, isChangeToPhone, isChangeToDesktop])

  return {
    open,
    toggleOpen: () => setOpen((prev) => !prev),
    setOpen,
  }
}

function isPhoneWidth(width: number) {
  return width < 1440
}

export default useOpen
