import { type ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { Text } from './Text'
import { TextLink } from './TextLink'
import { type NavLink } from './SiteHeader'

/** A titled group of footer links. */
export interface FooterColumn {
  title: string
  links: NavLink[]
}

export interface SiteFooterProps {
  /** Replaces the default large AJWA wordmark. */
  brand?: ReactNode
  /** Link columns rendered right of the brand. */
  columns?: FooterColumn[]
  /** Legal links in the bottom bar (right side). */
  legal?: NavLink[]
  /** Small muted note in the bottom bar, e.g. "© 2026 AJWA Hotels". */
  note?: string
  /** Extra slot (newsletter etc.) between the columns and the bottom bar. */
  children?: ReactNode
  className?: string
}

/**
 * The dark closing chapter of every page: near-black brown surface, serif
 * wordmark, gold column titles, and a hairline bottom bar for the legal line.
 */
export function SiteFooter({ brand, columns, legal, note, children, className }: SiteFooterProps) {
  const classes = ['ajwa-site-footer', 'ajwa-scheme-dark', className].filter(Boolean).join(' ')

  return (
    <footer className={classes}>
      <div className="ajwa-container">
        <div className="ajwa-site-footer__top">
          <div className="ajwa-site-footer__brand">
            {brand ?? <span className="ajwa-site-footer__wordmark">AJWA</span>}
          </div>
          {columns && columns.length > 0 ? (
            <div className="ajwa-site-footer__columns">
              {columns.map((column) => (
                <div className="ajwa-site-footer__column" key={column.title}>
                  <Eyebrow className="ajwa-site-footer__column-title">{column.title}</Eyebrow>
                  <ul className="ajwa-site-footer__list">
                    {column.links.map((link, i) => (
                      <li key={`${link.label}-${i}`}>
                        <a className="ajwa-site-footer__link" href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {children ? <div className="ajwa-site-footer__extra">{children}</div> : null}

        <div className="ajwa-site-footer__bottom">
          {note ? (
            <Text size="sm" muted className="ajwa-site-footer__note">
              {note}
            </Text>
          ) : null}
          {legal && legal.length > 0 ? (
            <nav className="ajwa-site-footer__legal" aria-label="Legal">
              {legal.map((link, i) => (
                <TextLink key={`${link.label}-${i}`} href={link.href} subtle>
                  {link.label}
                </TextLink>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
