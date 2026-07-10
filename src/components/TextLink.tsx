import { type MouseEventHandler, type ReactNode } from 'react'

export interface TextLinkProps {
  children: ReactNode
  href: string
  /** Show a small "↗" for external destinations. @default false */
  external?: boolean
  /** Muted ink instead of full ink. @default false */
  subtle?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}

/**
 * Tiny uppercase tracked link with the drawing-underline hover —
 * the "Discover more" CTA of the system.
 */
export function TextLink({ children, href, external = false, subtle = false, onClick, className }: TextLinkProps) {
  const classes = ['ajwa-link', subtle ? 'ajwa-link--subtle' : '', className].filter(Boolean).join(' ')
  return (
    <a
      className={classes}
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span className="ajwa-link__label">{children}</span>
      {external ? (
        <span className="ajwa-link__ext" aria-hidden="true">
          ↗
        </span>
      ) : null}
    </a>
  )
}
