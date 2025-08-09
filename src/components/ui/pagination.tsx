import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const paginationVariants = cva(
  'rounded-md inline-flex items-center justify-center text-[18px] tablet:text-[20px] laptop:text-[24px] desktop:text-[26px] transition-colors disabled:opacity-50 disabled:pointer-events-none outline-none',
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
      active: {
        true: 'border-navy-100 bg-navy-100 text-white-100',
        false: 'border-black-100',
      },
    },
    defaultVariants: {
      variant: 'default',
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
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function PaginationButton({ className, ...props }: PaginationLinkProps) {
  return (
    <PaginationLink
      className={cn('px-3 py-1 laptop:px-4 ', className)}
      {...props}
    />
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
      className={cn('gap-1 px-2.5 sm:pr-2.5 my-auto', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
}
