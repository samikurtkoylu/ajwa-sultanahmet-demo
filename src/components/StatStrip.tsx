export interface StatItem {
  /** The figure, set big in display serif — e.g. "61", "4.8★", "1573". */
  value: string
  /** Tiny tracked uppercase caption under the value, e.g. "ROOMS & SUITES". */
  label: string
}

export interface StatStripProps {
  /** Stats, rendered in order with hairline rules between them. */
  stats: StatItem[]
  /** @default 'start' */
  align?: 'start' | 'center'
  className?: string
}

/**
 * Row of headline figures: big display-serif value over a tiny tracked
 * uppercase label, separated by hairline vertical rules. Wraps on mobile.
 */
export function StatStrip({ stats, align = 'start', className }: StatStripProps) {
  const classes = [
    'ajwa-stat-strip',
    align === 'center' ? 'ajwa-stat-strip--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes}>
      <ul className="ajwa-stat-strip__list">
        {stats.map((stat, index) => (
          <li key={`${stat.label}-${index}`} className="ajwa-stat-strip__item">
            <span className="ajwa-stat-strip__value">{stat.value}</span>
            <span className="ajwa-stat-strip__label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
