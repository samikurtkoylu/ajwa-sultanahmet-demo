import { AjwaProvider, Text } from '@ajwa/design-system'

export function SerifLead() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Text size="lg" serif measure>
        Ottoman craftsmanship, Azerbaijani cuisine and the oldest skyline in Istanbul — five
        minutes from the Blue Mosque, and a world away from it.
      </Text>
    </AjwaProvider>
  )
}

export function Sizes() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 20 }}>
        <Text size="lg">Fifty-one rooms restored from four Ottoman mansions.</Text>
        <Text size="md">Each with hammam marble and hand-loomed textiles.</Text>
        <Text size="sm">Daily housekeeping and butlers on call.</Text>
      </div>
    </AjwaProvider>
  )
}

export function MutedParagraph() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Text measure muted>
        Afiya Spa and the marble hammam are reserved for house guests daily from 09:00 to 22:00;
        treatments are best booked a day ahead through the butler team.
      </Text>
    </AjwaProvider>
  )
}
