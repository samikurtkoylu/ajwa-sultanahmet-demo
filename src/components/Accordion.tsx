import { useId, useState, type ReactNode } from 'react'
import { Text } from './Text'

export interface AccordionItem {
  /** Question shown in the trigger row — serif, never uppercase. */
  question: string
  /** Panel content revealed on expand. */
  answer: ReactNode
}

export interface AccordionProps {
  /** FAQ entries, rendered in order. */
  items: AccordionItem[]
  className?: string
}

/**
 * Hairline FAQ accordion: one item open at a time, serif question with a
 * plus/minus glyph, panel height animated via the grid-rows trick.
 */
export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()
  const classes = ['ajwa-accordion', className].filter(Boolean).join(' ')
  return (
    <div className={classes}>
      {items.map((item, index) => {
        const open = openIndex === index
        const triggerId = `${baseId}-trigger-${index}`
        const panelId = `${baseId}-panel-${index}`
        const itemClasses = ['ajwa-accordion__item', open ? 'ajwa-accordion__item--open' : '']
          .filter(Boolean)
          .join(' ')
        return (
          <div key={index} className={itemClasses}>
            <button
              className="ajwa-accordion__trigger"
              type="button"
              id={triggerId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="ajwa-accordion__question">{item.question}</span>
              <span className="ajwa-accordion__glyph" aria-hidden="true" />
            </button>
            <div className="ajwa-accordion__panel" id={panelId} role="region" aria-labelledby={triggerId}>
              <div className="ajwa-accordion__panel-inner">
                <Text size="sm" muted as="div" className="ajwa-accordion__answer">
                  {item.answer}
                </Text>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
