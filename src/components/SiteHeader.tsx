import { type ReactNode } from 'react'
import { Button } from './Button'
import { LangSwitcher, type LangOption } from './LangSwitcher'
import { TextLink } from './TextLink'

/** A single navigation destination. */
export interface NavLink {
  label: string
  href: string
}

export interface SiteHeaderProps {
  /** Replaces the whole centered brand block. Default renders the AJWA wordmark. */
  brand?: ReactNode
  /** Tiny tracked line under the default wordmark, e.g. "HOTEL SULTANAHMET". */
  tagline?: string
  /** 2–3 primary links, shown left of the brand (hidden under 900px). */
  links?: NavLink[]
  /** Language options; renders a LangSwitcher on the right when provided. */
  langs?: LangOption[]
  /** Code of the currently active language. */
  activeLang?: string
  /** Called with the selected language code. */
  onLangSelect?: (code: string) => void
  /** Reserve CTA rendered as the rightmost element. */
  reserve?: { label: string; href: string }
  /** Shows the hamburger button when provided. */
  onMenuClick?: () => void
  /** Open state of the host's off-canvas menu, exposed to assistive tech. */
  menuOpen?: boolean
  /**
   * 'solid' — bone background with a hairline bottom border;
   * 'transparent' — absolutely positioned over a Hero, dark-scheme subtree.
   * @default 'solid'
   */
  tone?: 'solid' | 'transparent'
  className?: string
}

/**
 * The quiet luxury site header: hamburger + tiny tracked nav on the left,
 * serif AJWA wordmark centered, language switcher + reserve CTA on the right.
 * Not fixed — the host app decides; it only spans the full width at z-index 10.
 */
export function SiteHeader({
  brand,
  tagline,
  links,
  langs,
  activeLang,
  onLangSelect,
  reserve,
  onMenuClick,
  menuOpen,
  tone = 'solid',
  className,
}: SiteHeaderProps) {
  const classes = [
    'ajwa-site-header',
    `ajwa-site-header--${tone}`,
    tone === 'transparent' ? 'ajwa-scheme-dark' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="ajwa-container ajwa-site-header__row">
        <div className="ajwa-site-header__start">
          {onMenuClick ? (
            <button
              className="ajwa-site-header__menu"
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={onMenuClick}
            >
              <span className="ajwa-site-header__menu-bar" />
              <span className="ajwa-site-header__menu-bar" />
            </button>
          ) : null}
          {links && links.length > 0 ? (
            <nav className="ajwa-site-header__nav" aria-label="Primary">
              {links.map((link, i) => (
                <TextLink key={`${link.label}-${i}`} href={link.href}>
                  {link.label}
                </TextLink>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="ajwa-site-header__brand">
          {brand ?? (
            <span className="ajwa-site-header__wordmark">
              AJWA
              {tagline ? <span className="ajwa-site-header__tagline">{tagline}</span> : null}
            </span>
          )}
        </div>

        <div className="ajwa-site-header__end">
          {langs && langs.length > 0 ? (
            <LangSwitcher langs={langs} active={activeLang ?? langs[0].code} onSelect={onLangSelect} />
          ) : null}
          {reserve ? (
            <Button
              variant={tone === 'transparent' ? 'gold-outline' : 'outline'}
              size="sm"
              href={reserve.href}
            >
              {reserve.label}
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}
