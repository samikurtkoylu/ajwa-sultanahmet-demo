import { AjwaProvider, Accordion } from '@ajwa/design-system'

export function GuestQuestions() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ maxWidth: 640 }}>
        <Accordion
          items={[
            {
              question: 'When are check-in and check-out?',
              answer:
                'Check-in opens at 15:00 and check-out closes at 12:00. The butler team holds luggage on both sides of your stay.',
            },
            {
              question: 'Is the hammam open to all guests?',
              answer:
                'Afiya Spa and the marble hammam are reserved for house guests daily from 09:00 to 22:00; treatments are best booked a day ahead.',
            },
            {
              question: 'Do the mansions include hotel service?',
              answer:
                'Every Ajwa Home is serviced by the hotel — daily housekeeping, butlers on call and in-house dining delivered from Zeferan.',
            },
          ]}
        />
      </div>
    </AjwaProvider>
  )
}

export function DiningAndTransfers() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <div style={{ maxWidth: 640 }}>
        <Accordion
          items={[
            {
              question: 'What time is breakfast served?',
              answer:
                'Breakfast is laid at Zeferan from 07:00 to 10:30, with an à la carte Azerbaijani menu and a terrace overlooking the old city.',
            },
            {
              question: 'Do you arrange airport transfers?',
              answer:
                'The concierge arranges private transfers from both Istanbul airports; mansion guests booking three nights or more travel with our compliments.',
            },
          ]}
        />
      </div>
    </AjwaProvider>
  )
}
