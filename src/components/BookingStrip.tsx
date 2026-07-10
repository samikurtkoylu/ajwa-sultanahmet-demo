import { Button } from './Button'
import { Eyebrow } from './Eyebrow'
import { Heading } from './Heading'
import { TextLink } from './TextLink'

export interface BookingStripItem {
  /** Property or product name, e.g. "Ajwa Sultanahmet". */
  title: string
  /** The machine path — booking CTA rendered as a solid Button. */
  primary: { label: string; href: string }
  /** The human path — e.g. "Contact us", rendered as a TextLink. */
  secondary?: { label: string; href: string }
}

export interface BookingStripProps {
  /** One entry per way to stay; equal columns with hairline separators. */
  items: BookingStripItem[]
  /** Optional tiny centered tracked uppercase heading above the grid. */
  heading?: string
  className?: string
}

/**
 * The "three ways to stay" booking band: a full-width sunken strip where
 * every property offers a booking button beside a human contact link —
 * every machine path pairs with a human path.
 */
export function BookingStrip({ items, heading, className }: BookingStripProps) {
  const classes = ['ajwa-booking-strip', className].filter(Boolean).join(' ')
  return (
    <section className={classes}>
      <div className="ajwa-container">
        {heading ? (
          <Eyebrow align="center" className="ajwa-booking-strip__heading">
            {heading}
          </Eyebrow>
        ) : null}
        <div className="ajwa-booking-strip__grid">
          {items.map((item) => (
            <div key={item.title} className="ajwa-booking-strip__item">
              <Heading as="h3" size="sm" align="center">
                {item.title}
              </Heading>
              <div className="ajwa-booking-strip__actions">
                <Button variant="solid" size="sm" href={item.primary.href}>
                  {item.primary.label}
                </Button>
                {item.secondary ? (
                  <TextLink href={item.secondary.href}>{item.secondary.label}</TextLink>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
