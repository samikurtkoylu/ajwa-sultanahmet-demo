## Building with AJWA

AJWA Hotels is a luxury Ottoman-heritage hotel group (Sultanahmet, Cappadocia, and the Ajwa Homes mansions). The system is deliberately austere: two typefaces, two brand colors, hairline rules, square corners, and a lot of quiet.

### Always wrap in AjwaProvider

`AjwaProvider` is the root wrapper. It applies `.ajwa-root`, which carries the background, ink color, base typography, box-sizing and focus styles. **Without it every component renders as unstyled browser-default text** — no brand fonts, no colors.

```jsx
const { AjwaProvider, Hero, Button, TextLink } = window.AjwaDS;

<AjwaProvider>
  <Hero
    image="/img/sultanahmet.jpg"
    script="ajwa" eyebrow="Hotel Sultanahmet"
    title="A Palace of Quiet Hours"
    lead="Ottoman craftsmanship, five minutes from the Blue Mosque."
    actions={<><Button variant="gold-outline">Book your stay</Button><TextLink href="/rooms">Discover the rooms</TextLink></>}
  />
  <section className="ajwa-section">
    <div className="ajwa-container" style={{ display: 'grid', gap: 'var(--ajwa-space-lg)' }}>
      {/* page content */}
    </div>
  </section>
</AjwaProvider>
```

Pass `scheme="dark"` for a dark subtree. Sections that are dark by design (`Hero` content, `FooterCTA`, `SiteFooter`, `SiteHeader tone="transparent"`) already switch themselves — don't wrap them again.

### The styling idiom: tokens, not new colors

There is **no utility-class framework**. Components style themselves; for your own layout glue, write plain CSS/inline styles that consume the CSS custom properties. Never introduce a hex value — every color, size, and easing in a design must come from a token.

| Family | Real names | Use for |
|---|---|---|
| Surfaces | `--ajwa-bg`, `--ajwa-bg-raised`, `--ajwa-bg-sunken` | section backgrounds; `bg` is warm bone, never pure white |
| Ink | `--ajwa-ink`, `--ajwa-ink-soft`, `--ajwa-ink-muted` | headings, body, captions |
| Brand | `--ajwa-brown-800` (#382B26), `--ajwa-brown-900`, `--ajwa-gold-400` (#EDCC61), `--ajwa-accent-ink` | gold is **ink, stroke and pattern only — never a background fill**; use `--ajwa-accent-ink` for gold text that stays readable on the current scheme |
| Lines | `--ajwa-hairline`, `--ajwa-hairline-strong` | 1px rules and borders; that is the only border weight |
| Space | `--ajwa-space-2xs … --ajwa-space-3xl` | `--ajwa-space-3xl` is the ~144px section rhythm |
| Type | `--ajwa-font-display`, `--ajwa-font-serif`, `--ajwa-font-sans`, `--ajwa-text-display-1 … --ajwa-text-label-sm`, `--ajwa-track-label`, `--ajwa-track-display` | |
| Shape / motion | `--ajwa-radius` (0px), `--ajwa-radius-soft` (2px), `--ajwa-ease`, `--ajwa-dur-fast`, `--ajwa-dur-slow` | one house easing curve |
| Ornament | `--ajwa-pattern`, `--ajwa-pattern-motif` | gold ogee lattice, already the right color |

Three layout classes exist and are the only ones you should hand-write: `.ajwa-root` (from the provider), `.ajwa-container` (max-width + gutters) and `.ajwa-section` (vertical rhythm).

### Design laws

- **Hierarchy comes from size and case, never color or weight.** Colossal uppercase display serif (`Heading`) against tiny wide-tracked uppercase sans labels (`Eyebrow`, `Button`, `TextLink`). Nothing in between shouts.
- **Every booking path pairs a machine option with a human one** — `Button` "Book online" beside a `TextLink` "Contact us". `BookingStrip` encodes this for the three stay products.
- **Prices are transparent**: `Price` renders "From € 1.115 / night" on every listing card.
- **No page dead-ends**: close each page with `FooterCTA` above `SiteFooter`.
- Gold appears homeopathically: eyebrows, the calligraphic `script` word, pattern strokes, one outline button on dark.

### Where the truth lives

Read the real files before styling: `_ds/<folder>/styles.css` and its `@import` closure (`fonts/fonts.css`, `_ds_bundle.css` — which holds every token and component rule), and `components/<group>/<Name>/<Name>.prompt.md` plus `<Name>.d.ts` for a component's exact API.
