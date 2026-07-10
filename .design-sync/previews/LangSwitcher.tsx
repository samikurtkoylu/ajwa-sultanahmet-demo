import { AjwaProvider, LangSwitcher } from '@ajwa/design-system'

export function EnglishActive() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <LangSwitcher langs={[{ code: 'ENG' }, { code: 'TUR' }]} active="ENG" />
    </AjwaProvider>
  )
}

export function TurkishActive() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <LangSwitcher langs={[{ code: 'ENG' }, { code: 'TUR' }]} active="TUR" />
    </AjwaProvider>
  )
}

export function ThreeLanguages() {
  return (
    <AjwaProvider style={{ padding: 32 }}>
      <LangSwitcher langs={[{ code: 'ENG' }, { code: 'TUR' }, { code: 'ARA' }]} active="TUR" />
    </AjwaProvider>
  )
}
