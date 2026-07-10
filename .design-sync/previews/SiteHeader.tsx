import { AjwaProvider, SiteHeader } from '@ajwa/design-system'

const links = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Hammam', href: '#hammam' },
]

const langs = [
  { code: 'ENG', href: '#' },
  { code: 'TUR', href: '#' },
]

export function Solid() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SiteHeader
        tone="solid"
        tagline="HOTEL SULTANAHMET"
        links={links}
        langs={langs}
        activeLang="ENG"
        reserve={{ label: 'Reserve', href: '#book' }}
        onMenuClick={() => {}}
      />
    </AjwaProvider>
  )
}

export function OverHero() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ position: 'relative', minHeight: 160, background: 'var(--ajwa-brown-900)' }}>
        <SiteHeader
          tone="transparent"
          tagline="HOTEL SULTANAHMET"
          links={links}
          langs={langs}
          activeLang="ENG"
          reserve={{ label: 'Reserve', href: '#book' }}
          onMenuClick={() => {}}
        />
      </div>
    </AjwaProvider>
  )
}
