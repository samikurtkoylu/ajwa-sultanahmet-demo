import { AjwaProvider, FooterCTA } from '@ajwa/design-system'

export function IstanbulEvening() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <FooterCTA
        title="Your Istanbul evening awaits"
        lead="Reserve directly with the house for the best rate, a flexible arrival and a welcome from the butler team."
        action={{ label: 'Reserve', href: '#' }}
        secondary={{ label: 'Plan with our concierge', href: '#' }}
      />
    </AjwaProvider>
  )
}

export function TitleAndAction() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <FooterCTA
        title="Come home to Cappadocia"
        action={{ label: 'Check availability', href: '#' }}
      />
    </AjwaProvider>
  )
}
