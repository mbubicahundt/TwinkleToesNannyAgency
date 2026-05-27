import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:   'bg-tt-blue text-white hover:bg-tt-blue-dark',
        outline:   'border border-tt-blue text-tt-blue bg-transparent hover:bg-tt-blue-light',
        ghost:     'text-tt-blue hover:bg-tt-blue-light',
        white:     'bg-white text-tt-blue hover:bg-tt-blue-light shadow-sm',
        'white-outline': 'border border-white/40 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm',
        secondary: 'bg-tt-gray text-tt-text hover:bg-gray-200',
      },
      size: {
        sm: 'h-8  px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-11 px-6 text-base',
        xl: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
