export interface PatternDividerProps {
  /**
   * 'band' — a repeating strip of the ogee lattice;
   * 'hairline' — a 1px rule with a single centered pattern tile.
   * @default 'band'
   */
  variant?: 'band' | 'hairline'
  /** Band strip height in px ('band' only). @default 88 */
  height?: number
  /** Fade the band out toward both ends ('band' only). @default false */
  fade?: boolean
  className?: string
}

/**
 * Decorative brand divider built from the gold ogee-lattice pattern
 * (var(--ajwa-pattern)). Purely presentational — hidden from assistive tech.
 */
export function PatternDivider({ variant = 'band', height = 88, fade = false, className }: PatternDividerProps) {
  const classes = [
    'ajwa-pattern-divider',
    `ajwa-pattern-divider--${variant}`,
    fade ? 'ajwa-pattern-divider--fade' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div
      className={classes}
      role="presentation"
      aria-hidden="true"
      style={variant === 'band' ? { height } : undefined}
    />
  )
}
