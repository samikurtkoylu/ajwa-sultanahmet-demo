import { createElement, type ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
  /** Semantic element. @default 'h2' */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * Visual scale, independent of the semantic level.
   * 'display-1' ≈ hero-size, 'display-2' ≈ page titles, then lg/md/sm.
   * @default 'lg'
   */
  size?: 'display-1' | 'display-2' | 'lg' | 'md' | 'sm'
  align?: 'start' | 'center'
  /** Serif italic, no uppercase — for editorial statements. @default false */
  italic?: boolean
  className?: string
}

/**
 * Display heading in Minion Pro Display: uppercase, tight leading, fluid
 * scale. Hierarchy in this system is built by size and case, never color.
 */
export function Heading({
  children,
  as = 'h2',
  size = 'lg',
  align = 'start',
  italic = false,
  className,
}: HeadingProps) {
  const classes = [
    'ajwa-heading',
    `ajwa-heading--${size}`,
    align === 'center' ? 'ajwa-heading--center' : '',
    italic ? 'ajwa-heading--italic' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return createElement(as, { className: classes }, children)
}
