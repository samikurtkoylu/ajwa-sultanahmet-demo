import { type CSSProperties } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Accordion,
  AjwaProvider,
  BookingStrip,
  Button,
  Eyebrow,
  FooterCTA,
  Heading,
  Hero,
  LangSwitcher,
  OfferCard,
  PatternDivider,
  Price,
  SectionHeader,
  SiteFooter,
  SiteHeader,
  SpecStrip,
  StatStrip,
  StayCard,
  Text,
  TextLink,
} from '../src'

const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
}

function App() {
  return (
    <AjwaProvider>
      <SiteHeader
        tagline="HOTEL SULTANAHMET"
        links={[
          { label: 'Rooms', href: '#rooms' },
          { label: 'Dining', href: '#' },
          { label: 'Hammam', href: '#' },
        ]}
        langs={[{ code: 'ENG', href: '#' }, { code: 'TUR', href: '#' }]}
        activeLang="ENG"
        reserve={{ label: 'Reserve', href: '#book' }}
        onMenuClick={() => console.log('menu')}
      />

      <Hero
        image="./img/sultanahmet-hero.jpg"
        imageAlt="AJWA Sultanahmet at dusk"
        height="tall"
        script="ajwa"
        eyebrow="Hotel Sultanahmet"
        title="A Palace of Quiet Hours"
        lead="Ottoman craftsmanship, Azerbaijani cuisine and the oldest skyline in Istanbul — five minutes from the Blue Mosque."
        actions={
          <>
            <Button variant="gold-outline">Book your stay</Button>
            <TextLink href="#rooms">Discover the rooms</TextLink>
          </>
        }
      />

      <BookingStrip
        heading="Three ways to stay"
        items={[
          {
            title: 'Stay in Sultanahmet',
            primary: { label: 'Book online', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
          {
            title: 'Stay in Cappadocia',
            primary: { label: 'Book online', href: '#' },
            secondary: { label: 'Contact us', href: '#' },
          },
          {
            title: 'Live in a Mansion',
            primary: { label: 'Enquire', href: '#' },
            secondary: { label: 'Call us', href: '#' },
          },
        ]}
      />

      <section className="ajwa-section" id="rooms">
        <div className="ajwa-container" style={{ display: 'grid', gap: '3rem' }}>
          <SectionHeader
            script="odalar"
            eyebrow="Accommodation"
            title="Rooms & Suites"
            lead="Fifty-one rooms restored from four Ottoman mansions, each with hammam marble and hand-loomed textiles."
            align="center"
          />
          <div style={grid}>
            <StayCard
              image="./img/suite.jpg"
              category="Suite"
              title="Sultan Suite"
              description="The corner rooms of the old konak, opening to the Sea of Marmara over a private terrace."
              specs={[{ value: '75 m²' }, { value: 'King bed' }, { value: 'Marble hammam' }]}
              price={{ amount: '1.115' }}
              cta={{ label: 'Explore', href: '#' }}
            />
            <StayCard
              image="./img/cappadocia.jpg"
              category="Cave Suite"
              title="Kılıç Arslan Cave Suite"
              description="Carved volcanic stone, a fireplace and a valley view that has not changed in a thousand years."
              specs={[{ value: '60 m²' }, { value: 'Fireplace' }, { value: 'Valley view' }]}
              price={{ amount: '780' }}
              cta={{ label: 'Explore', href: '#' }}
            />
            <StayCard
              image="./img/mansion.jpg"
              category="Ajwa Homes"
              title="The White Mansion"
              description="A four-storey wooden mansion on the old city walls, staffed and served by the hotel."
              specs={[{ value: 'Sleeps 8' }, { value: '4 bedrooms' }, { value: 'Butler' }]}
              price={{ amount: '5.090', prefix: 'From' }}
              cta={{ label: 'Explore', href: '#' }}
            />
          </div>
          <StayCard
            orientation="horizontal"
            image="./img/clock-house.jpg"
            category="Ajwa Homes"
            title="The Clock House"
            description="Timber floors, a private courtyard and the muffled toll of the old clock tower. The Clock House hosts eight guests across three floors, with the hotel's butlers, chefs and drivers on call."
            specs={[{ value: 'Sleeps 8' }, { value: '4 bed' }, { value: '3 bath' }, { value: 'Courtyard' }]}
            price={{ amount: '5.990' }}
            cta={{ label: 'Explore the house', href: '#' }}
          />
        </div>
      </section>

      <PatternDivider fade />

      <section className="ajwa-section">
        <div className="ajwa-container" style={{ display: 'grid', gap: '3rem' }}>
          <SectionHeader script="miras" eyebrow="The Estate" title="One heritage, two cities" />
          <StatStrip
            align="center"
            stats={[
              { value: '61', label: 'Rooms & suites' },
              { value: '2', label: 'Cities' },
              { value: '1573', label: 'Year of the mansions' },
              { value: '4.8', label: 'Guest rating' },
            ]}
          />
        </div>
      </section>

      <section className="ajwa-section" style={{ background: 'var(--ajwa-bg-sunken)' }}>
        <div className="ajwa-container" style={{ display: 'grid', gap: '3rem' }}>
          <SectionHeader script="teklifler" eyebrow="Special Offers" title="Seasonal offers" align="center" />
          <div style={grid}>
            <OfferCard
              image="./img/offer-honeymoon.jpg"
              title="Honeymoon in Luxury"
              description="Champagne on arrival, a private hammam ritual and a candlelit Zeferan dinner."
              meta={['Valid Feb – Oct', 'Min. 2 nights', 'Per stay · 2 guests']}
              price={{ amount: '1.450', prefix: 'From', unit: 'stay' }}
              cta={{ label: 'View offer', href: '#' }}
            />
            <OfferCard
              image="./img/offer-dine.jpg"
              title="Stay & Dine"
              description="A tasting journey through Azerbaijani cuisine with every night of your stay."
              meta={['Valid all year', 'Min. 1 night', 'Per night · 2 guests']}
              price={{ amount: '920', prefix: 'From' }}
              cta={{ label: 'View offer', href: '#' }}
            />
            <OfferCard
              image="./img/mansion-room.jpg"
              title="Mansions with VIP Transfer"
              description="Private airport transfer in both directions when you book any mansion for three nights."
              meta={['Valid Mar – Nov', 'Min. 3 nights', 'Ajwa Homes only']}
              cta={{ label: 'View offer', href: '#' }}
            />
          </div>
        </div>
      </section>

      <section className="ajwa-section">
        <div className="ajwa-container" style={{ display: 'grid', gap: '2.5rem', maxWidth: '46rem' }}>
          <SectionHeader script="sorular" eyebrow="Good to know" title="Questions" />
          <Accordion
            items={[
              {
                question: 'When are check-in and check-out?',
                answer: 'Check-in opens at 15:00 and check-out closes at 12:00. The butler team holds luggage on both sides of your stay.',
              },
              {
                question: 'Is the hammam open to all guests?',
                answer: 'Afiya Spa and the marble hammam are reserved for house guests daily from 09:00 to 22:00; treatments are best booked a day ahead.',
              },
              {
                question: 'Do the mansions include hotel service?',
                answer: 'Every Ajwa Home is serviced by the hotel — daily housekeeping, butlers on call and in-house dining delivered from Zeferan.',
              },
            ]}
          />
        </div>
      </section>

      <section className="ajwa-section" style={{ background: 'var(--ajwa-bg-raised)' }}>
        <div className="ajwa-container" style={{ display: 'grid', gap: '2rem' }}>
          <SectionHeader eyebrow="Foundations" title="Type & controls" />
          <Heading size="display-2">Display two</Heading>
          <Heading size="md">Heading medium</Heading>
          <Heading size="sm">Heading small</Heading>
          <Heading italic size="md">An italic editorial statement, set in Minion Display.</Heading>
          <Text size="lg" serif measure>
            Large serif lead paragraph — the voice of the estate, warm and unhurried, never shouting.
          </Text>
          <Text measure muted>
            Standard body copy in Museo Sans. Muted ink for secondary passages and captions.
          </Text>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button>Book your stay</Button>
            <Button variant="outline">Contact us</Button>
            <Button variant="solid" size="sm">Small solid</Button>
            <Button variant="outline" size="sm" disabled>Disabled</Button>
            <TextLink href="#">Discover more</TextLink>
            <TextLink href="https://ajwa.com.tr" external subtle>
              ajwa.com.tr
            </TextLink>
            <LangSwitcher langs={[{ code: 'ENG' }, { code: 'TUR' }]} active="TUR" />
          </div>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'end' }}>
            <Price amount="1.115" size="lg" />
            <Price amount="920" size="md" unit="stay" />
            <Price amount="75" size="sm" prefix="" unit="person" />
          </div>
          <SpecStrip
            items={[
              { label: 'Size', value: '180 m²' },
              { label: 'Breakfast', value: 'Included' },
              { value: 'Free high-speed Wi-Fi' },
              { value: 'In-room bar' },
            ]}
          />
          <PatternDivider variant="hairline" />
          <Eyebrow script="hamam">The Bathhouse</Eyebrow>
        </div>
      </section>

      <FooterCTA
        title="Your Istanbul evening awaits"
        lead="Reserve directly with the house for the best rate, a flexible arrival and a welcome from the butler team."
        action={{ label: 'Reserve', href: '#' }}
        secondary={{ label: 'Plan with our concierge', href: '#' }}
      />

      <SiteFooter
        columns={[
          {
            title: 'Stay',
            links: [
              { label: 'Rooms & Suites', href: '#' },
              { label: 'Ajwa Homes', href: '#' },
              { label: 'Special Offers', href: '#' },
            ],
          },
          {
            title: 'Experience',
            links: [
              { label: 'Zeferan Restaurant', href: '#' },
              { label: 'Afiya Spa & Hammam', href: '#' },
              { label: 'Concierge', href: '#' },
            ],
          },
          {
            title: 'Ajwa',
            links: [
              { label: 'Heritage', href: '#' },
              { label: 'Cappadocia', href: '#' },
              { label: 'Careers', href: '#' },
            ],
          },
        ]}
        legal={[
          { label: 'Privacy', href: '#' },
          { label: 'Cookies', href: '#' },
          { label: 'KVKK', href: '#' },
        ]}
        note="© 2026 AJWA Hotels"
      />
    </AjwaProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
