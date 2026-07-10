import { type ReactNode } from 'react'

export interface EyebrowProps {
  /** The tiny wide-tracked uppercase label, e.g. "THE BATHHOUSE". */
  children: ReactNode
  /**
   * Optional calligraphic word rendered above the label in italic display
   * serif — the AJWA signature device (e.g. script="hamam" over "THE BATHHOUSE").
   */
  script?: string
  /** Label color. 'accent' = readable gold on the current scheme. @default 'accent' */
  tone?: 'accent' | 'ink' | 'muted'
  align?: 'start' | 'center'
  className?: string
}

/**
 * Section eyebrow: small uppercase tracked label, optionally crowned by a
 * gold calligraphic word. Use one above every section title.
 */
export function Eyebrow({ children, script, tone = 'accent', align = 'start', className }: EyebrowProps) {
  const classes = [
    'ajwa-eyebrow',
    `ajwa-eyebrow--${tone}`,
    align === 'center' ? 'ajwa-eyebrow--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <p className={classes}>
      {script ? (
        <em className="ajwa-eyebrow__script" aria-hidden="true">
          {script}
        </em>
      ) : null}
      <span className="ajwa-eyebrow__label">{children}</span>
    </p>
  )
}
