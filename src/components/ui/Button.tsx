import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  href?: string
  children: ReactNode
}

export function Button({ variant = 'primary', icon, href, children, className, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black'

  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  }

  const content = (
    <>
      <span>{children}</span>
      {icon !== undefined ? icon : <ArrowRight size={16} />}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {content}
    </button>
  )
}
