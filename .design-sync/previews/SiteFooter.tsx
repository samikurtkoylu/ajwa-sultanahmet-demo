import { AjwaProvider, SiteFooter, Text, TextLink } from '@ajwa/design-system'

const columns = [
  {
    title: 'Stay',
    links: [
      { label: 'Rooms & Suites', href: '#' },
      { label: 'Ajwa Homes', href: '#' },
      { label: 'Special Offers', href: '#' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { label: 'Zeferan Restaurant', href: '#' },
      { label: 'Afiya Spa & Hammam', href: '#' },
      { label: 'Concierge', href: '#' },
    ],
  },
  {
    title: 'Ajwa',
    links: [
      { label: 'Heritage', href: '#' },
      { label: 'Cappadocia', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]

const legal = [
  { label: 'Privacy', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'KVKK', href: '#' },
]

export function FullFooter() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SiteFooter columns={columns} legal={legal} note="© 2026 AJWA Hotels" />
    </AjwaProvider>
  )
}

export function WithNewsletter() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SiteFooter columns={columns} legal={legal} note="© 2026 AJWA Hotels">
        <div
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Text serif size="lg">
            Letters from the house — quiet news of openings, offers and the seasons in Sultanahmet.
          </Text>
          <TextLink href="#" subtle>
            Join the list
          </TextLink>
        </div>
      </SiteFooter>
    </AjwaProvider>
  )
}
