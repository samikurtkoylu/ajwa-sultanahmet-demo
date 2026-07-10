import { Heading } from './Heading'
import { Price } from './Price'
import { Text } from './Text'
import { TextLink } from './TextLink'

export interface OfferCardProps {
  /** Cover image URL — cropped 4/3. */
  image: string
  /** Alt text for the cover image. @default '' (decorative) */
  imageAlt?: string
  /** Offer title — serif uppercase, e.g. "Winter in the Old City". */
  title: string
  /** Short teaser copy for the offer. */
  description?: string
  /**
   * Structured offer metadata, one row per entry with hairline separators,
   * e.g. ["VALID FEB – OCT", "MIN. 2 NIGHTS", "PER STAY · 2 GUESTS"].
   */
  meta?: string[]
  /** Rate shown left in the hairline-topped footer row. */
  price?: { amount: string | number; currency?: string; unit?: string; prefix?: string }
  /** "View offer"-style link shown right in the footer row. */
  cta?: { label: string; href: string }
  className?: string
}

/**
 * Campaign/package card. A vertical stay-style card whose distinguishing move
 * is the metadata block: tiny muted uppercase rows divided by hairlines, then
 * a footer pairing a small price with a text-link CTA.
 */
export function OfferCard({
  image,
  imageAlt = '',
  title,
  description,
  meta,
  price,
  cta,
  className,
}: OfferCardProps) {
  const classes = ['ajwa-offer-card', className].filter(Boolean).join(' ')
  const hasFooter = Boolean(price || cta)

  return (
    <article className={classes}>
      <div className="ajwa-offer-card__media">
        <img className="ajwa-offer-card__img" src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="ajwa-offer-card__body">
        <div className="ajwa-offer-card__content">
          <Heading as="h3" size="md" className="ajwa-offer-card__title">
            {title}
          </Heading>
          {description ? (
            <Text size="sm" muted className="ajwa-offer-card__desc">
              {description}
            </Text>
          ) : null}
          {meta && meta.length > 0 ? (
            <ul className="ajwa-offer-card__meta">
              {meta.map((row, i) => (
                <li key={i} className="ajwa-offer-card__meta-row">
                  {row}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {hasFooter ? (
          <div className="ajwa-offer-card__footer">
            {price ? (
              <Price
                amount={price.amount}
                currency={price.currency}
                unit={price.unit}
                prefix={price.prefix}
                size="sm"
              />
            ) : null}
            {cta ? (
              <TextLink href={cta.href} className="ajwa-offer-card__cta">
                {cta.label}
              </TextLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
