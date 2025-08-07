import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import CircleLoader, {
  type Color as LoaderColor,
} from './loaders/CircleLoader/CircleLoader'
import ArrowIcon from '@/assets/icons/arrow.svg?react'

const buttonVariants = cva(
  'inline-flex items-center border-2 border-transparent justify-center gap-2.5 whitespace-nowrap rounded-xl text-[20px] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] group',
  {
    variants: {
      variant: {
        blue: 'bg-navy-100 text-white-100 hover:bg-white-100 hover:text-navy-100 hover:border-navy-100',
        yellow:
          'bg-yellow-100 text-navy-100 hover:bg-white-100 hover:border-2 hover:border-yellow-100',
        transparent:
          'bg-white-200 text-navy-100 border-navy-100 border-2 hover:bg-navy-100 hover:text-white-100',
        green:
          'bg-green-200 text-white-100 hover:bg-white-100 hover:border-2 hover:border-green-200',
      },
      size: {
        default: 'px-10 py-6 ',
        flattened: 'px-10 py-4 ',
        sm: 'px-7 py-4 text-[18px]',
        icon: 'size-9 rounded-full',
        box: 'bd-4 w-15 h-15',
        half_rounded: 'rounded-[33px] pt-1.75 pb-1.75 pr-6 pl-2.75',
      },
      arrow: {
        true: '',
        false: '',
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

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  loader?: boolean
  arrow?: boolean
}

function Button({
  className,
  variant,
  size,
  loader,
  children,
  disabled,
  arrow,
  ...props
}: ButtonProps) {
  const resolvedLoaderColor = getLoaderColor(variant)

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loader}
      {...props}
    >
      <>
        {children}
        {loader && <CircleLoader size="20px" color={resolvedLoaderColor} />}
        {arrow && !loader && (
          <div className="transition-transform group-hover:translate-x-1 flex items-center p-[5px] justify-center w-5 h-5 bg-navy-200 rounded-full text-white-100 ">
            <ArrowIcon />
          </div>
        )}
      </>
    </button>
  )
}

export { Button, buttonVariants }
