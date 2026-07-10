import { AjwaProvider, Heading } from '@ajwa/design-system'

export function PageTitle() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Heading as="h1" size="display-2">
        Rooms &amp; Suites
      </Heading>
    </AjwaProvider>
  )
}

export function Scale() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'grid', gap: 24 }}>
        <Heading size="display-2">A palace of quiet hours</Heading>
        <Heading size="lg">One heritage, two cities</Heading>
        <Heading size="md">The Sultan Suite</Heading>
        <Heading size="sm">Good to know</Heading>
      </div>
    </AjwaProvider>
  )
}

export function EditorialItalic() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Heading size="md" italic>
        The most ancient wing of the konak, where the marble was cut in 1573.
      </Heading>
    </AjwaProvider>
  )
}

export function Centered() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Heading size="lg" align="center">
        Seasonal offers
      </Heading>
    </AjwaProvider>
  )
}
