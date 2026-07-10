import { AjwaProvider, Price } from '@ajwa/design-system'

export function Sizes() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <Price amount="1.115" size="lg" />
        <Price amount="920" size="md" />
        <Price amount="780" size="sm" />
      </div>
    </AjwaProvider>
  )
}

export function PerStay() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Price amount="1.450" size="md" unit="stay" />
    </AjwaProvider>
  )
}

export function BareAmount() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Price amount="75" size="sm" prefix="" unit="person" />
    </AjwaProvider>
  )
}
