import { type MouseEventHandler, type ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  /**
   * 'solid' — dark brown fill (primary action);
   * 'outline' — hairline border, transparent (secondary);
   * 'gold-outline' — gold hairline, for dark surfaces only.
   * @default 'solid'
   */
  variant?: 'solid' | 'outline' | 'gold-outline'
  /** @default 'md' */
  size?: 'sm' | 'md'
  /** Renders an <a> when set; otherwise a <button>. */
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
  fullWidth?: boolean
  disabled?: boolean
  /** Button type when rendered as <button>. @default 'button' */
  type?: 'button' | 'submit'
  className?: string
}

/**
 * Rectangular, square-cornered CTA with a tiny uppercase tracked label —
 * the AJWA button. Use 'solid' once per view; pair with 'outline' for the
 * secondary path (e.g. "Book online" + "Contact us").
 */
export function Button({
  children,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
}: ButtonProps) {
  const classes = [
    'ajwa-btn',
    `ajwa-btn--${variant}`,
    `ajwa-btn--${size}`,
    fullWidth ? 'ajwa-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href && !disabled) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
