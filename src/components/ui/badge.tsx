import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-lg border font-medium w-fit whitespace-nowrap [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        blue: 'bg-navy-100 text-white-100',
        yellow: 'bg-yellow-300 text-navy-100 ',
        transparent: 'bg-white-200 text-navy-100 border-navy-100 border-2 ',
      },
      size: {
        sm: 'px-3 py-[5px] text-xs',
        md: 'px-4 py-[6px] text-[15px] ',
      },
    },
    defaultVariants: {
      variant: 'blue',
      size: 'sm',
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  size,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'
  const badgeSize = window.innerWidth > 768 ? size : 'sm'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size: badgeSize }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
