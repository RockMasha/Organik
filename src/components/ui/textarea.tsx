import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const textareaVariants = cva(
  'border-[--color-gray-400] placeholder:text-[--color-gray-200] focus-visible:border-[--color-navy-100] focus-visible:ring-[--color-navy-100]/50 aria-invalid:ring-[--color-orange-100]/20 dark:aria-invalid:ring-[--color-orange-100]/40 aria-invalid:border-[--color-orange-100] dark:bg-[--color-gray-600]/30 flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      variant: {
        default: '',
        blue: 'bg-navy-100 text-white-100 placeholder:text-white-100',
        yellow: 'bg-yellow-200 text-navy-100 placeholder:text-navy-100',
        transparent: 'bg-white-200 text-navy-100 border-navy-100',
      },
      size: {
        sm: 'min-h-[4rem] max-w-xs px-2 py-1 text-sm',
        default: 'min-h-16 max-w-md px-3 py-2 text-base',
        lg: 'min-h-[6rem] max-w-lg px-4 py-3 text-lg',
        xl: 'min-h-[8rem] px-5 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type TextareaProps = React.ComponentProps<'textarea'> &
  VariantProps<typeof textareaVariants>

function Textarea({ className, variant, size, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Textarea }
