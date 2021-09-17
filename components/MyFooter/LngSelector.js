import i18nConfig from '../../i18n.json'
import { Select, Text } from 'grommet'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

const { locales } = i18nConfig

const lngMap = new Map([
  ['cn', <Text>中文</Text>],
  ['en', <Text>English</Text>]
])

function LngSelector() {
  const { lang } = useTranslation()

  return <Select
    options={locales}
    value={lang}
    onChange={({ option }) => setLanguage(option)}
    valueLabel={lngMap.get(lang)}
  >
    {(option) => lngMap.get(option)}
  </Select>
}

export default LngSelector