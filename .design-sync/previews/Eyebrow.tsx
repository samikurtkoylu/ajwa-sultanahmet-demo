import { AjwaProvider, Eyebrow } from '@ajwa/design-system'

export function Signature() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Eyebrow script="hamam">The Bathhouse</Eyebrow>
    </AjwaProvider>
  )
}

export function Tones() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 28 }}>
        <Eyebrow script="tarih" tone="accent">
          History
        </Eyebrow>
        <Eyebrow script="mutfak" tone="ink">
          The Restaurant
        </Eyebrow>
        <Eyebrow script="odalar" tone="muted">
          Rooms &amp; Suites
        </Eyebrow>
      </div>
    </AjwaProvider>
  )
}

export function Centered() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Eyebrow script="teklifler" align="center">
        Special Offers
      </Eyebrow>
    </AjwaProvider>
  )
}
