import { AjwaProvider, StayCard } from '@ajwa/design-system'
import cappadocia from './images/cappadocia.jpg'
import clockHouse from './images/clock-house.jpg'
import suite from './images/suite.jpg'

export function RoomCategory() {
  return (
    <AjwaProvider style={{ padding: 24 }}>
      <div style={{ maxWidth: 380 }}>
        <StayCard
          image={suite}
          imageAlt="The Sultan Suite, looking out over the Sea of Marmara"
          category="Suite"
          title="Sultan Suite"
          description="The corner rooms of the old konak, opening to the Sea of Marmara over a private terrace."
          specs={[{ value: '75 m²' }, { value: 'King bed' }, { value: 'Marble hammam' }]}
          price={{ amount: '1.115' }}
          cta={{ label: 'Explore', href: '#' }}
        />
      </div>
    </AjwaProvider>
  )
}

export function MansionHorizontal() {
  return (
    <AjwaProvider style={{ padding: 24 }}>
      <StayCard
        orientation="horizontal"
        image={clockHouse}
        imageAlt="The Clock House courtyard"
        category="Ajwa Homes"
        title="The Clock House"
        description="Timber floors, a private courtyard and the muffled toll of the old clock tower. Eight guests across three floors, with the hotel's butlers and chefs on call."
        specs={[{ value: 'Sleeps 8' }, { value: '4 bed' }, { value: '3 bath' }, { value: 'Courtyard' }]}
        price={{ amount: '5.990' }}
        cta={{ label: 'Explore the house', href: '#' }}
      />
    </AjwaProvider>
  )
}

export function WithoutPrice() {
  return (
    <AjwaProvider style={{ padding: 24 }}>
      <div style={{ maxWidth: 380 }}>
        <StayCard
          image={cappadocia}
          imageAlt="A carved cave suite in Cappadocia"
          category="Cave Suite"
          title="Kılıç Arslan"
          description="Carved volcanic stone, a fireplace and a valley view that has not changed in a thousand years."
          cta={{ label: 'Enquire', href: '#' }}
        />
      </div>
    </AjwaProvider>
  )
}
