# design-sync notes — @ajwa/design-system

## Repo facts
- Node 25 / npm 11. `npm run build` = `build:js` (tsup → `dist/index.js`) + `build:css` (esbuild → `dist/ajwa.css` + `dist/fonts/`).
- **`cfg.cssEntry` must be `dist/ajwa.css`, never the repo's `styles.css`.** The repo entry is an `@import`-only stub; pointing the converter at it produced an unresolvable import closure (empty `tokens/`, `fonts/`, and a placeholder `_ds_bundle.css`). `build:css` flattens the imports and copies the woff/woff2 next to the css, which is what the font scrape follows.
- `tokens/` in the bundle stays empty by design: the `:root` custom properties live inside the flattened `_ds_bundle.css`, which `styles.css` `@import`s. Validate confirms `tokens: 64 defined, 58 referenced`.
- Fonts are licensed first-party files lifted from the live site (`site-capture/gateway/assets/fonts/`): Minion Pro (Regular + Display roman/italic subsets) and Museo Sans Cyrl 500. No webfont service — 8 `@font-face` rules ship under `fonts/`.

## Playwright
Machine has `chromium-1228` cached at `C:/Users/Sami/AppData/Local/ms-playwright`. That build is pinned by **playwright 1.61.0** — installed into `.ds-sync/`. Run validate/capture with `PLAYWRIGHT_BROWSERS_PATH="C:/Users/Sami/AppData/Local/ms-playwright"`, otherwise it re-downloads.

## Previews
- Every component needs `<AjwaProvider>` around it — it carries the background, ink color, base typography and focus styles. Unwrapped previews render as unstyled browser-default text. `cfg.provider` is deliberately NOT set: the wrapper takes a `scheme` prop and several previews need to show both schemes in one sheet, so each preview wraps explicitly.
- Preview images live in `.design-sync/previews/images/` (committed) and are imported directly — esbuild inlines them as data URIs (`STORY_LOADERS`). They are center-cropped to card ratios at q60 (~25–40 KB each; hero 900×480) to keep the inlined payload small.
- Dark sections (`Hero` content, `FooterCTA`, `SiteFooter`, transparent `SiteHeader`) theme themselves via `.ajwa-scheme-dark`. Wrapping them in `<AjwaProvider scheme="dark">` double-applies and is redundant, not wrong.

## Component-specific preview facts (from the authoring waves)
- **Hero**: `height="full"` is `100svh` and leaves the card mostly empty. Previews use `tall` / `compact`. A `height="full"` preview would need a taller per-component capture viewport override.
- **SiteHeader `tone="transparent"`** is `position: absolute` — a preview must place it inside `<div style={{position:'relative', minHeight:160, background:'var(--ajwa-brown-900)'}}>` or it renders invisible.
- **Accordion** has no `defaultOpen` prop, so its card shows the closed state (questions + plus glyphs + hairlines). That is the honest static render, not a defect.
- **StatStrip `align="center"`** wraps its 4th stat to a second row at the capture width — documented mobile behavior.
- **AjwaProvider**'s own card nests two sibling providers (light + dark) with no outer wrapper, so the theme flip shows side by side.

## Known render warns
- `[RENDER_THIN] Hero` / `[RENDER_BLANK] Accordion` fired on the **floor cards only**, before their previews were authored. If either reappears with an authored preview present, it is a real regression.
- `[GRID_OVERFLOW]` has never fired. If it does, the wide candidates are `SiteHeader`, `SiteFooter`, `BookingStrip` and `StayCard orientation="horizontal"` — `cardMode: "column"` is the remedy.

## Re-sync risks
- `dist/ajwa.css` is a build artifact and gitignored — a fresh clone must run `npm run build` (both halves) before the converter, or `cfg.cssEntry` won't exist (`[NO_DIST]`-adjacent failure at the CSS step).
- Preview images are committed but the demo folder they were derived from (`demo/img/`) is itself derived from `../site-capture/`. If the capture moves, only regeneration breaks — the committed previews keep working.
- The `--entry ./dist/index.js` flag is required: npm does not self-install `node_modules/@ajwa/design-system`, so entry auto-discovery has nothing to resolve.
