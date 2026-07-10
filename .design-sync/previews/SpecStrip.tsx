import { AjwaProvider, SpecStrip } from '@ajwa/design-system'

export function Labelled() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SpecStrip
        items={[
          { label: 'Size', value: '180 m²' },
          { label: 'Sleeps', value: '2 guests' },
          { label: 'Aspect', value: 'Sea of Marmara' },
          { label: 'Breakfast', value: 'Included' },
        ]}
      />
    </AjwaProvider>
  )
}

export function Plain() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SpecStrip
        items={[
          { value: '75 m²' },
          { value: 'King bed' },
          { value: 'Marble hammam' },
          { value: 'Free high-speed Wi-Fi' },
        ]}
      />
    </AjwaProvider>
  )
}

export function Compact() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <SpecStrip
        size="sm"
        items={[{ value: 'Sleeps 8' }, { value: '4 bed' }, { value: '3 bath' }, { value: 'Courtyard' }]}
      />
    </AjwaProvider>
  )
}
