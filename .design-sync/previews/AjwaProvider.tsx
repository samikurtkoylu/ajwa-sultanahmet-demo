import { AjwaProvider, Button, Heading, Text } from '@ajwa/design-system'

export function LightAndDark() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <AjwaProvider style={{ padding: 32, flex: '1 1 260px' }}>
        <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
          <Heading size="sm">A Palace of Quiet Hours</Heading>
          <Text muted>
            Ottoman craftsmanship and the oldest skyline in Istanbul, five minutes from the Blue
            Mosque.
          </Text>
          <Button>Book your stay</Button>
        </div>
      </AjwaProvider>
      <AjwaProvider scheme="dark" style={{ padding: 32, flex: '1 1 260px' }}>
        <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
          <Heading size="sm">A Palace of Quiet Hours</Heading>
          <Text muted>
            Ottoman craftsmanship and the oldest skyline in Istanbul, five minutes from the Blue
            Mosque.
          </Text>
          <Button variant="gold-outline">Book your stay</Button>
        </div>
      </AjwaProvider>
    </div>
  )
}

export function LightScheme() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <Heading size="md">Rooms &amp; Suites</Heading>
        <Text measure muted>
          Fifty-one rooms restored from four Ottoman mansions, each with hammam marble and
          hand-loomed textiles.
        </Text>
        <Button variant="outline">Explore the rooms</Button>
      </div>
    </AjwaProvider>
  )
}
