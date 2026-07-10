import { AjwaProvider, SectionHeader } from '@ajwa/design-system'

export function WithScript() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SectionHeader script="odalar" eyebrow="Accommodation" title="Rooms & Suites" />
    </AjwaProvider>
  )
}

export function CenteredWithLead() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SectionHeader
        script="teklifler"
        eyebrow="Special Offers"
        title="Seasonal Offers"
        lead="Fifty-one rooms restored from four Ottoman mansions, each with hammam marble and hand-loomed textiles."
        align="center"
      />
    </AjwaProvider>
  )
}

export function PlainTitle() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SectionHeader eyebrow="Foundations" title="Type & Controls" />
    </AjwaProvider>
  )
}
