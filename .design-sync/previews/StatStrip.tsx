import { AjwaProvider, StatStrip } from '@ajwa/design-system'

export function Centered() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <StatStrip
        align="center"
        stats={[
          { value: '61', label: 'Rooms & suites' },
          { value: '2', label: 'Cities' },
          { value: '1573', label: 'Year of the mansions' },
          { value: '4.8', label: 'Guest rating' },
        ]}
      />
    </AjwaProvider>
  )
}

export function AlignStart() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <StatStrip
        align="start"
        stats={[
          { value: '51', label: 'Rooms in Sultanahmet' },
          { value: '10', label: 'Cave suites' },
          { value: '3', label: 'Ajwa Homes' },
        ]}
      />
    </AjwaProvider>
  )
}
