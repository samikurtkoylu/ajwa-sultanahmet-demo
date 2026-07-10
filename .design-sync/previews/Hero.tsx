import { AjwaProvider, Button, Hero, TextLink } from '@ajwa/design-system'
import sultanahmetHero from './images/sultanahmet-hero.jpg'

export function CenteredOpener() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Hero
        image={sultanahmetHero}
        imageAlt="AJWA Sultanahmet at dusk, above the old city rooftops"
        height="tall"
        align="center"
        script="ajwa"
        eyebrow="Hotel Sultanahmet"
        title="A Palace of Quiet Hours"
        lead="Ottoman craftsmanship, Azerbaijani cuisine and the oldest skyline in Istanbul — five minutes from the Blue Mosque."
      />
    </AjwaProvider>
  )
}

export function BottomStartCompact() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Hero
        image={sultanahmetHero}
        imageAlt="Marble corridor of the restored Ottoman mansion"
        height="compact"
        align="bottom-start"
        script="odalar"
        eyebrow="Accommodation"
        title="Rooms & Suites"
      />
    </AjwaProvider>
  )
}

export function WithActions() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <Hero
        image={sultanahmetHero}
        imageAlt="AJWA Sultanahmet illuminated at night"
        height="tall"
        align="center"
        script="ajwa"
        eyebrow="Hotel Sultanahmet"
        title="Where Istanbul Slows Down"
        lead="Reserve directly with the house for the best rate and a welcome from the butler team."
        actions={
          <>
            <Button variant="gold-outline">Book your stay</Button>
            <TextLink href="#rooms">Discover the rooms</TextLink>
          </>
        }
      />
    </AjwaProvider>
  )
}
