import { Eyebrow } from './Eyebrow'
import { Heading } from './Heading'
import { Price } from './Price'
import { SpecStrip, type SpecItem } from './SpecStrip'
import { Text } from './Text'
import { TextLink } from './TextLink'

export interface StayCardProps {
  /** Cover image URL — cropped 4/3 (vertical) or 3/2 (horizontal). */
  image: string
  /** Alt text for the cover image. @default '' (decorative) */
  imageAlt?: string
  /** Tiny uppercase eyebrow above the title, e.g. "DELUXE BOSPHORUS". */
  category?: string
  /** Card title — serif uppercase, e.g. "Ajwa Sultanahmet". */
  title: string
  /** Short teaser copy, clamped to three lines. */
  description?: string
  /** Key facts (size, occupancy, view …) rendered as a small SpecStrip. */
  specs?: SpecItem[]
  /** Rate shown left in the hairline-separated footer row. */
  price?: { amount: string | number; currency?: string; unit?: string; prefix?: string }
  /** "Discover more"-style link shown right in the footer row. */
  cta?: { label: string; href: string }
  /**
   * 'horizontal' places the image left (55%) with content right;
   * stacks back to vertical under 720px. @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

/**
 * THE product card — room category, mansion or hotel teaser. Image on a dark
 * underlay that slowly scales on card hover, serif uppercase title, optional
 * specs, and a hairline-topped footer pairing price with a text-link CTA.
 */
export function StayCard({
  image,
  imageAlt = '',
  category,
  title,
  description,
  specs,
  price,
  cta,
  orientation = 'vertical',
  className,
}: StayCardProps) {
  const classes = ['ajwa-stay-card', `ajwa-stay-card--${orientation}`, className]
    .filter(Boolean)
    .join(' ')
  const hasFooter = Boolean(price || cta)

  return (
    <article className={classes}>
      <div className="ajwa-stay-card__media">
        <img className="ajwa-stay-card__img" src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="ajwa-stay-card__body">
        <div className="ajwa-stay-card__content">
          {category ? <Eyebrow>{category}</Eyebrow> : null}
          <Heading as="h3" size="md" className="ajwa-stay-card__title">
            {title}
          </Heading>
          {description ? (
            <Text size="sm" muted className="ajwa-stay-card__desc">
              {description}
            </Text>
          ) : null}
          {specs && specs.length > 0 ? <SpecStrip items={specs} size="sm" /> : null}
        </div>
        {hasFooter ? (
          <div className="ajwa-stay-card__footer">
            {price ? (
              <Price
                amount={price.amount}
                currency={price.currency}
                unit={price.unit}
                prefix={price.prefix}
                size="md"
              />
            ) : null}
            {cta ? (
              <TextLink href={cta.href} className="ajwa-stay-card__cta">
                {cta.label}
              </TextLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
