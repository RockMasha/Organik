import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import CircleLoader, {
  type Color as LoaderColor,
} from '@/components/ui/Loaders/CircleLoader/CircleLoader'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        blue: 'bg-navy-100 text-white-100 hover:bg-white-100 hover:text-navy-100',
        yellow: 'bg-yellow-300 text-navy-100 hover:bg-white-100',
        transparent:
          'bg-white-200 text-navy-100 border-navy-100 border-2 hover:bg-navy-100 hover:text-white-100',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'blue',
      size: 'default',
    },
  }
)

const getLoaderColor = (
  variant?: VariantProps<typeof buttonVariants>['variant']
): LoaderColor => {
  switch (variant) {
    case 'blue':
      return 'orange'
    case 'yellow':
      return 'blue'
    default:
      return 'orange'
  }
}

function Button({
  className,
  variant,
  size,
  icon,
  loader,
  children,
  disabled,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    icon?: React.ReactNode
    loader?: boolean
  }) {
  const resolvedLoaderColor = getLoaderColor(variant)

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loader}
      {...props}
    >
      <>
        {loader && <CircleLoader color={resolvedLoaderColor} />}
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </>
    </button>
  )
}

export { Button, buttonVariants }
