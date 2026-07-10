import { Eyebrow } from './Eyebrow'
import { Heading } from './Heading'
import { Text } from './Text'

export interface SectionHeaderProps {
  /** Tiny uppercase tracked label above the title, e.g. "ROOMS & SUITES". */
  eyebrow?: string
  /**
   * Calligraphic gold word crowning the eyebrow (the AJWA signature device,
   * e.g. script="hamam" over "THE BATHHOUSE").
   */
  script?: string
  /** Section title, set in uppercase display serif. */
  title: string
  /** Visual scale of the title. @default 'lg' */
  titleSize?: 'display-2' | 'lg' | 'md'
  /** Optional serif lead paragraph under the title, capped at the readable measure. */
  lead?: string
  /** @default 'start' */
  align?: 'start' | 'center'
  className?: string
}

/**
 * The standard opening of every page section: gold eyebrow (optionally with a
 * calligraphic crown), colossal display title, optional serif lead.
 */
export function SectionHeader({
  eyebrow,
  script,
  title,
  titleSize = 'lg',
  lead,
  align = 'start',
  className,
}: SectionHeaderProps) {
  const classes = [
    'ajwa-section-header',
    align === 'center' ? 'ajwa-section-header--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <header className={classes}>
      {eyebrow || script ? (
        <Eyebrow script={script} tone="accent" align={align}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading as="h2" size={titleSize} align={align}>
        {title}
      </Heading>
      {lead ? (
        <Text size="lg" serif measure align={align} className="ajwa-section-header__lead">
          {lead}
        </Text>
      ) : null}
    </header>
  )
}
