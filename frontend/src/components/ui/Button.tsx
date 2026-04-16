import { Button as HlButton } from '@headlessui/react'
import clsx from 'clsx'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import type { LinkProps } from 'react-router'
import { Link as RouterLink } from 'react-router'

type ButtonVariant = 'default' | 'ghost'

type ButtonColor = 'primary'

type ButtonBase = {
  children?: ReactNode
  icon?: ReactNode
  variant?: ButtonVariant
  color?: ButtonColor
  className?: string
}

type ButtonAsButton = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never
    href?: never
    target?: never
  }

type ButtonAsRouterLink = ButtonBase &
  Omit<LinkProps, 'className'> & {
    to: string
    href?: never
  }

type ButtonAsAnchor = ButtonBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string
    to?: never
  }

type ButtonProps = ButtonAsButton | ButtonAsRouterLink | ButtonAsAnchor

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-[5px] px-4 py-3 text-sm font-semibold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base font-light'

const iconOnlyStyles = 'h-10 w-10 flex items-center justify-center rounded-md'

const colorStyles: Record<
  ButtonColor,
  {
    default: string
    ghost: string
  }
> = {
  primary: {
    default: 'bg-surface-yellow hover:bg-surface-lighter-primary text-black',
    ghost:
      'border-2 border-border-default-primary text-primary-500 bg-surface-subtle-primary/30 hover:bg-surface-subtle-primary',
  },
}

const Button = ({
  children,
  icon,
  variant = 'default',
  color = 'primary',
  to,
  href,
  target,
  className,
  ...rest
}: ButtonProps) => {
  const variantStyles = icon ? iconOnlyStyles : colorStyles[color][variant]

  const classes = clsx(
    'cursor-pointer',
    !icon && baseStyles,
    variantStyles,
    className
  )

  const content = (
    <>
      {icon && <span className="flex items-center">{icon}</span>}
      {children && !icon && <span>{children}</span>}
    </>
  )

  if (to) {
    return (
      <RouterLink
        to={to}
        className={classes}
        {...(rest as Omit<ButtonAsRouterLink, 'to' | 'className'>)}
      >
        {content}
      </RouterLink>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        {...(rest as Omit<ButtonAsAnchor, 'href' | 'className'>)}
      >
        {content}
      </a>
    )
  }

  return (
    <HlButton
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {content}
    </HlButton>
  )
}

export default Button
