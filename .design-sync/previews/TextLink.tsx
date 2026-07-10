import { AjwaProvider, TextLink } from '@ajwa/design-system'

export function Default() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <TextLink href="#rooms">Discover the rooms</TextLink>
    </AjwaProvider>
  )
}

export function Variants() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
        <TextLink href="#offers">View the offer</TextLink>
        <TextLink href="#heritage" subtle>
          Our heritage
        </TextLink>
        <TextLink href="https://ajwa.com.tr" external>
          ajwa.com.tr
        </TextLink>
      </div>
    </AjwaProvider>
  )
}

export function OnDark() {
  return (
    <AjwaProvider scheme="dark" style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
        <TextLink href="#book">Reserve your stay</TextLink>
        <TextLink href="https://ajwa.com.tr" external subtle>
          ajwa.com.tr
        </TextLink>
      </div>
    </AjwaProvider>
  )
}
