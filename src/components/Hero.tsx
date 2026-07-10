import { type ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { Heading } from './Heading'
import { Text } from './Text'

export interface HeroProps {
  /** Image URL, rendered object-fit: cover on a dark underlay. */
  image: string
  /** Alt text for the image; decorative by default. @default '' */
  imageAlt?: string
  /**
   * 'full' — 100svh cinematic opener (100vh fallback);
   * 'tall' — 78vh interior pages; 'compact' — 52vh utility pages.
   * @default 'full'
   */
  height?: 'full' | 'tall' | 'compact'
  /** Tiny uppercase tracked label above the title. */
  eyebrow?: string
  /** Calligraphic gold word crowning the eyebrow (passes through to Eyebrow). */
  script?: string
  /** The colossal display title, rendered as an h1. */
  title: string
  /** Optional serif lead paragraph beneath the title. */
  lead?: string
  /** CTA row — e.g. a solid Button paired with a TextLink. */
  actions?: ReactNode
  /**
   * 'center' — centered composition; 'bottom-start' — bottom-left,
   * inside the container padding.
   * @default 'center'
   */
  align?: 'center' | 'bottom-start'
  /** Escape hatch rendered after the actions row. */
  children?: ReactNode
  className?: string
}

/**
 * Full-bleed cinematic hero: cover image on a dark underlay, scrim overlay,
 * and a dark-scheme content layer (bone ink) aligned center or bottom-left.
 */
export function Hero({
  image,
  imageAlt = '',
  height = 'full',
  eyebrow,
  script,
  title,
  lead,
  actions,
  align = 'center',
  children,
  className,
}: HeroProps) {
  const classes = [
    'ajwa-hero',
    `ajwa-hero--${height}`,
    `ajwa-hero--${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  const alignInner = align === 'center' ? 'center' : 'start'

  return (
    <section className={classes}>
      <div className="ajwa-hero__media">
        <img className="ajwa-hero__img" src={image} alt={imageAlt} />
      </div>
      <div className="ajwa-hero__scrim" aria-hidden="true" />
      <div className="ajwa-hero__content ajwa-scheme-dark">
        <div className="ajwa-container ajwa-hero__inner">
          {eyebrow || script ? (
            <Eyebrow script={script} tone="accent" align={alignInner}>
              {eyebrow}
            </Eyebrow>
          ) : null}
          <Heading as="h1" size="display-1" align={alignInner}>
            {title}
          </Heading>
          {lead ? (
            <Text size="lg" serif align={alignInner} className="ajwa-hero__lead">
              {lead}
            </Text>
          ) : null}
          {actions ? <div className="ajwa-hero__actions">{actions}</div> : null}
          {children}
        </div>
      </div>
    </section>
  )
}
