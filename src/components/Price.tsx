export interface PriceProps {
  /** The figure, pre-formatted for the locale — e.g. "1.115" or 980. */
  amount: string | number
  /** Currency sign shown before the amount; pass '' to hide. @default '€' */
  currency?: string
  /** Per-what suffix rendered as "/ night"; pass '' to hide. @default 'night' */
  unit?: string
  /** Tiny uppercase lead-in; pass '' to hide. @default 'From' */
  prefix?: string
  /** Scale of the serif amount. @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * Rate display: tiny tracked "FROM", serif display amount ("€ 1.115"), muted
 * "/ night". Price transparency is a core pattern of this system — show a
 * Price wherever a stay is offered.
 */
export function Price({
  amount,
  currency = '€',
  unit = 'night',
  prefix = 'From',
  size = 'md',
  className,
}: PriceProps) {
  const classes = ['ajwa-price', `ajwa-price--${size}`, className].filter(Boolean).join(' ')
  return (
    <p className={classes}>
      {prefix ? <span className="ajwa-price__prefix">{prefix}</span> : null}
      <span className="ajwa-price__amount">
        {currency ? `${currency} ` : ''}
        {amount}
      </span>
      {unit ? <span className="ajwa-price__unit">{`/ ${unit}`}</span> : null}
    </p>
  )
}
