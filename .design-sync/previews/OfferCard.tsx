import { AjwaProvider, OfferCard } from '@ajwa/design-system'
import honeymoon from './images/offer-honeymoon.jpg'
import dine from './images/offer-dine.jpg'
import mansionRoom from './images/mansion-room.jpg'

export function Honeymoon() {
  return (
    <AjwaProvider style={{ padding: 24 }}>
      <div style={{ maxWidth: 380 }}>
        <OfferCard
          image={honeymoon}
          imageAlt="A candlelit suite dressed for two"
          title="Honeymoon in Luxury"
          description="Champagne on arrival, a private hammam ritual and a candlelit Zeferan dinner."
          meta={['Valid Feb – Oct', 'Min. 2 nights', 'Per stay · 2 guests']}
          price={{ amount: '1.450', prefix: 'From', unit: 'stay' }}
          cta={{ label: 'View offer', href: '#' }}
        />
      </div>
    </AjwaProvider>
  )
}

export function StayAndDine() {
  return (
    <AjwaProvider style={{ padding: 24 }}>
      <div style={{ maxWidth: 380 }}>
        <OfferCard
          image={dine}
          imageAlt="A table laid for an Azerbaijani tasting menu at Zeferan"
          title="Stay & Dine"
          description="A tasting journey through Azerbaijani cuisine with every night of your stay."
          meta={['Valid all year', 'Min. 1 night', 'Per night · 2 guests']}
          price={{ amount: '920', prefix: 'From' }}
          cta={{ label: 'View offer', href: '#' }}
        />
      </div>
    </AjwaProvider>
  )
}

export function EnquiryOnly() {
  return (
    <AjwaProvider style={{ padding: 24 }}>
      <div style={{ maxWidth: 380 }}>
        <OfferCard
          image={mansionRoom}
          imageAlt="A bedroom in the White Mansion at dawn"
          title="Mansions with VIP Transfer"
          description="Private airport transfer in both directions when you book any Ajwa Home for three nights."
          meta={['Valid Mar – Nov', 'Min. 3 nights', 'Ajwa Homes only']}
          cta={{ label: 'View offer', href: '#' }}
        />
      </div>
    </AjwaProvider>
  )
}
