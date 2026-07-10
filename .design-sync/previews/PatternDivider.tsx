import { AjwaProvider, Heading, PatternDivider, Text } from '@ajwa/design-system'

export function Band() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 24 }}>
        <Heading size="sm" align="center">
          Rooms &amp; Suites
        </Heading>
        <PatternDivider />
        <Heading size="sm" align="center">
          The Estate
        </Heading>
      </div>
    </AjwaProvider>
  )
}

export function BandFade() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 24 }}>
        <Text align="center" muted>
          Zeferan Restaurant
        </Text>
        <PatternDivider fade />
        <Text align="center" muted>
          Afiya Spa &amp; Hammam
        </Text>
      </div>
    </AjwaProvider>
  )
}

export function Hairline() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 20 }}>
        <Text align="center" muted>
          One heritage, two cities
        </Text>
        <PatternDivider variant="hairline" />
        <Text align="center" muted>
          Sultanahmet &amp; Cappadocia
        </Text>
      </div>
    </AjwaProvider>
  )
}
