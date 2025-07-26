import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const paginationVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-white-100 text-navy-100 border border-navy-100 hover:bg-navy-100 hover:text-white-100',
        subtle: 'bg-transparent text-navy-100 hover:bg-white-200',
        outline: 'border border-gray-200 text-navy-100 hover:bg-white-200',
        ghost: 'bg-transparent hover:text-white-100 hover:bg-navy-100',
        blue: 'bg-transparent hover:text-white-100 hover:bg-navy-100',
      },
      size: {
        sm: 'h-8 px-3 rounded-md text-sm',
        md: 'h-9 px-4 rounded-md text-base',
        lg: 'h-10 px-5 rounded-md text-lg',
        icon: 'size-9 rounded-md',
      },
      active: {
        true: 'border-navy-100 bg-navy-100 text-white-100',
        false: 'border-black-100',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'icon',
      active: false,
    },
  }
)

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="pagination-item"
      className={cn('list-none', className)}
      {...props}
    />
  )
}

type PaginationLinkProps = {
  isActive?: boolean
  children?: React.ReactNode
} & VariantProps<typeof paginationVariants> &
  React.ComponentProps<'button'>

function PaginationLink({
  isActive,
  variant,
  size,
  className,
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        paginationVariants({
          variant: isActive ? 'outline' : (variant ?? 'ghost'),
          size: size ?? 'icon',
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function PaginationPrevious({
  className,
  ...props
}: Omit<PaginationLinkProps, 'children'>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: Omit<PaginationLinkProps, 'children'>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
