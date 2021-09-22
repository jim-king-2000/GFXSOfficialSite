import i18nConfig from '../../i18n.json'
import { Select, Text, Box } from 'grommet'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import Flag from 'react-flagkit'

const { locales } = i18nConfig

const lngMap = new Map([
  ['zh', <Box direction='row' gap='small' margin='small'><Flag country='CN' /><Text>中文</Text></Box>],
  ['en', <Box direction='row' gap='small' margin='small'><Flag country='US' /><Text>English</Text></Box>]
])

function LngSelector() {
  const { lang } = useTranslation()

  return (
    <Select
      options={locales}
      value={lang}
      onChange={({ option }) => setLanguage(option)}
      valueLabel={lngMap.get(lang)}
    >
      {option => lngMap.get(option)}
    </Select>
  )
}

export default LngSelector