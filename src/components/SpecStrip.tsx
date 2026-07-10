export interface SpecItem {
  /** Optional tiny uppercase caption above the value, e.g. "Size". */
  label?: string
  /** The fact itself, e.g. "55 m²", "King bed", "Breakfast included". */
  value: string
}

export interface SpecStripProps {
  /** Quick facts, rendered in order with hairline rules between them. */
  items: SpecItem[]
  /** @default 'md' */
  size?: 'sm' | 'md'
  className?: string
}

/**
 * Horizontal row of quick facts separated by 1px hairline vertical rules —
 * the specs-first strip that opens room and suite detail pages.
 */
export function SpecStrip({ items, size = 'md', className }: SpecStripProps) {
  const classes = ['ajwa-spec-strip', `ajwa-spec-strip--${size}`, className]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes}>
      <ul className="ajwa-spec-strip__list">
        {items.map((item, index) => (
          <li key={`${item.value}-${index}`} className="ajwa-spec-strip__item">
            {item.label ? <span className="ajwa-spec-strip__label">{item.label}</span> : null}
            <span className="ajwa-spec-strip__value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
