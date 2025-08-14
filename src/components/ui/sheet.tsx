import { useState, useRef, useEffect } from 'preact/hooks'
import { createPortal } from 'preact/compat'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ComponentChildren, VNode } from 'preact'
import type { JSX } from 'preact/jsx-runtime'
import React from 'react'
const getPortalRoot = () => {
  let element = document.getElementById('sheet-portal-root')
  if (!element) {
    element = document.createElement('div')
    element.id = 'sheet-portal-root'
    document.body.appendChild(element)
  }
  return element
}

interface SheetProps {
  children?: ComponentChildren
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sheet({
  children,
  open: controlledOpen,
  onOpenChange,
}: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isOpen =
    controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const setIsOpen = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    }
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen)
    }
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const typedChild = child as VNode
      if (typedChild.type === SheetTrigger) {
        return React.cloneElement(typedChild, {
          onClick: () => setIsOpen(true),
        })
      }
      if (typedChild.type === SheetContent) {
        return React.cloneElement(typedChild, {
          open: isOpen,
          onClose: () => setIsOpen(false),
        })
      }
      if (typedChild.type === SheetClose) {
        return React.cloneElement(typedChild, {
          onClick: () => setIsOpen(false),
        })
      }
    }
    return child
  })

  return <div data-slot="sheet">{childrenWithProps}</div>
}

interface BaseProps {
  children?: ComponentChildren
  className?: string
}

export function SheetTrigger(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return <button type="button" data-slot="sheet-trigger" {...props} />
}

export function SheetClose(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return <button type="button" data-slot="sheet-close" {...props} />
}

export function SheetPortal({ children }: { children?: ComponentChildren }) {
  const portalRoot = getPortalRoot()
  return createPortal(children, portalRoot)
}

export function SheetOverlay({
  className,
  open,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & { open: boolean }) {
  return (
    <div
      data-slot="sheet-overlay"
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  )
}

export function SheetContent({
  className,
  children,
  side = 'right',
  open,
  onClose,
  ...props
}: BaseProps &
  JSX.HTMLAttributes<HTMLDivElement> & {
    side?: 'top' | 'right' | 'bottom' | 'left'
    open: boolean
    onClose: () => void
  }) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      contentRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  return (
    <SheetPortal>
      {open && <SheetOverlay open={open} />}
      {open && (
        <div
          data-slot="sheet-content-wrapper"
          data-state={open ? 'open' : 'closed'}
          className={cn(
            'fixed z-50 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
            side === 'right' &&
              'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 sm:max-w-sm',
            side === 'left' &&
              'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
            side === 'top' &&
              'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto',
            side === 'bottom' &&
              'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto',
            className
          )}
        >
          <div
            ref={contentRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            className={cn(
              'bg-white flex flex-col gap-4 shadow-lg h-full w-full',
              side === 'right' && 'border-l',
              side === 'left' && 'border-r',
              side === 'top' && 'border-b',
              side === 'bottom' && 'border-t'
            )}
            {...props}
          >
            {children}

            <button
              type="button"
              className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
              onClick={onClose}
            >
              <XIcon className="size-4 tablet:size-6 laptop:size-8 desktop:size-10 cursor-pointer" />
              <span className="sr-only">Закрити</span>
            </button>
          </div>
        </div>
      )}
    </SheetPortal>
  )
}

export function SheetHeader({
  className,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

export function SheetFooter({
  className,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

export function SheetTitle({
  className,
  ...props
}: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="sheet-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

export function SheetDescription({
  className,
  ...props
}: JSX.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}
