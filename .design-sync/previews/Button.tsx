import { AjwaProvider, Button } from '@ajwa/design-system'

export function Primary() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Button>Book your stay</Button>
    </AjwaProvider>
  )
}

export function PairedPaths() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="solid">Book online</Button>
        <Button variant="outline">Contact us</Button>
      </div>
    </AjwaProvider>
  )
}

export function OnDarkSurface() {
  return (
    <AjwaProvider scheme="dark" style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="solid">Reserve</Button>
        <Button variant="gold-outline">Plan with a concierge</Button>
      </div>
    </AjwaProvider>
  )
}

export function Sizes() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="md">Medium</Button>
        <Button size="sm">Small</Button>
        <Button size="sm" variant="outline" disabled>
          Unavailable
        </Button>
      </div>
    </AjwaProvider>
  )
}
