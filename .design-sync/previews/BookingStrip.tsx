import { AjwaProvider, BookingStrip } from '@ajwa/design-system'

export function ThreeWaysToStay() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <BookingStrip
        heading="Three ways to stay"
        items={[
          {
            title: 'Stay in Sultanahmet',
            primary: { label: 'Book online', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
          {
            title: 'Stay in Cappadocia',
            primary: { label: 'Book online', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
          {
            title: 'Live in a Mansion',
            primary: { label: 'Book online', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
        ]}
      />
    </AjwaProvider>
  )
}

export function DiningAndHammam() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <BookingStrip
        heading="Reserve your evening"
        items={[
          {
            title: 'Zeferan Restaurant',
            primary: { label: 'Reserve a table', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
          {
            title: 'Afiya Spa & Hammam',
            primary: { label: 'Book a ritual', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
        ]}
      />
    </AjwaProvider>
  )
}
