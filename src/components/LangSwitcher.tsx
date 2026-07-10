export interface LangOption {
  /** Display code, e.g. "ENG" or "TUR". */
  code: string
  /** Renders an <a> when set; otherwise a <button>. */
  href?: string
}

export interface LangSwitcherProps {
  /** Languages in display order. */
  langs: LangOption[]
  /** Code of the currently active language. */
  active: string
  onSelect?: (code: string) => void
  className?: string
}

/**
 * Quiet pipe-separated language list ("ENG | TUR") in tiny tracked
 * uppercase. The active language sits at full ink; the rest are muted.
 */
export function LangSwitcher({ langs, active, onSelect, className }: LangSwitcherProps) {
  const classes = ['ajwa-lang-switcher', className].filter(Boolean).join(' ')
  return (
    <nav className={classes} aria-label="Language">
      <ul className="ajwa-lang-switcher__list">
        {langs.map((lang) => {
          const isActive = lang.code === active
          const langClasses = [
            'ajwa-lang-switcher__lang',
            isActive ? 'ajwa-lang-switcher__lang--active' : '',
          ]
            .filter(Boolean)
            .join(' ')
          const handleClick = onSelect ? () => onSelect(lang.code) : undefined
          return (
            <li key={lang.code} className="ajwa-lang-switcher__item">
              {lang.href ? (
                <a
                  className={langClasses}
                  href={lang.href}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {lang.code}
                </a>
              ) : (
                <button
                  className={langClasses}
                  type="button"
                  aria-current={isActive ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {lang.code}
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
