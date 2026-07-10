import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'
import { TextLink } from './TextLink'

export interface FooterCTAProps {
  /** The colossal centered invitation, e.g. "Stay with us". */
  title: string
  /** Optional serif lead paragraph under the title. */
  lead?: string
  /** Primary conversion action (solid button). */
  action: { label: string; href: string }
  /** Optional secondary path rendered as a text link beside the button. */
  secondary?: { label: string; href: string }
  className?: string
}

/**
 * The pre-footer conversion band: a dark full-width section with a centered
 * display title, optional serif lead, and the primary CTA. Sits directly
 * above SiteFooter on every page.
 */
export function FooterCTA({ title, lead, action, secondary, className }: FooterCTAProps) {
  const classes = ['ajwa-footer-cta', 'ajwa-scheme-dark', className].filter(Boolean).join(' ')

  return (
    <section className={classes}>
      <div className="ajwa-container ajwa-footer-cta__inner">
        <Heading as="h2" size="display-2" align="center">
          {title}
        </Heading>
        {lead ? (
          <Text size="lg" serif measure align="center">
            {lead}
          </Text>
        ) : null}
        <div className="ajwa-footer-cta__actions">
          <Button variant="solid" href={action.href}>
            {action.label}
          </Button>
          {secondary ? <TextLink href={secondary.href}>{secondary.label}</TextLink> : null}
        </div>
      </div>
    </section>
  )
}
