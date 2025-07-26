import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: [
            'rounded-lg border px-4 py-3 bg-black-100',
            'data-[variant=blue]:bg-black-100 data-[variant=blue]:text-white-100',
            'data-[variant=yellow]:bg-black-100 data-[variant=yellow]:text-navy-100',
            'data-[variant=transparent]:bg-white-200 data-[variant=transparent]:text-navy-100 data-[variant=transparent]:border-navy-100',
          ].join(' '),
          description: 'text-sm opacity-80',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
