import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: '',
        blue: 'bg-navy-100 text-white-100 placeholder:text-white-100',
        yellow: 'bg-yellow-300 text-navy-100 placeholder:text-navy-100',
        transparent: 'bg-white-200 text-navy-100 border-navy-100',
      },
      size: {
        sm: 'h-8 px-2 py-1 max-w-sm text-sm',
        default: 'h-9 px-3 max-w-md py-1 text-base',
        lg: 'h-11 px-4 max-w-l py-2 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants>

function Input({
  className,
  type = 'text',
  variant,
  size,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Input }
