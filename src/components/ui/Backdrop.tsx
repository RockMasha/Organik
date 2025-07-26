import { cn } from '@/lib/utils'
import useLockPage from '@/shared/hooks/useLockPage'
import type { HTMLAttributes } from 'react'

export function Backdrop({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  useLockPage()

  return (
    <div
      className={cn(
        'fixed flex inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 justify-center items-center',
        className
      )}
      {...props}
    />
  )
}
