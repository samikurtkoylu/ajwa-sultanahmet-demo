import { type ReactNode } from 'react'

export interface TextProps {
  children: ReactNode
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  /** Softer ink for secondary copy. @default false */
  muted?: boolean
  /** Serif face for editorial paragraphs (Minion Pro). @default false */
  serif?: boolean
  /** Cap line length at the readable measure (~36rem). @default false */
  measure?: boolean
  align?: 'start' | 'center'
  /** Semantic element. @default 'p' */
  as?: 'p' | 'span' | 'div'
  className?: string
}

/** Body copy in Museo Sans (or Minion Pro with `serif`). */
export function Text({
  children,
  size = 'md',
  muted = false,
  serif = false,
  measure = false,
  align = 'start',
  as = 'p',
  className,
}: TextProps) {
  const Tag = as
  const classes = [
    'ajwa-text',
    `ajwa-text--${size}`,
    muted ? 'ajwa-text--muted' : '',
    serif ? 'ajwa-text--serif' : '',
    measure ? 'ajwa-text--measure' : '',
    align === 'center' ? 'ajwa-text--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return <Tag className={classes}>{children}</Tag>
}
