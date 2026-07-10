import { type CSSProperties, type ReactNode } from 'react'

export interface AjwaProviderProps {
  /** Color scheme for the subtree. Sections may override locally. @default 'light' */
  scheme?: 'light' | 'dark'
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

/**
 * Root wrapper of the design system. Applies brand background, ink color,
 * base typography and focus styles. Every AJWA screen must be wrapped in it —
 * without it components render unstyled against the host page.
 */
export function AjwaProvider({ scheme = 'light', children, className, style }: AjwaProviderProps) {
  const classes = ['ajwa-root', scheme === 'dark' ? 'ajwa-scheme-dark' : '', className]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}
