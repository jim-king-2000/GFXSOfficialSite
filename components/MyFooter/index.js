import LngSelector from './LngSelector'
import { Box, Text } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyFooter({ width }) {
  const { t } = useTranslation('common')
  return (
    <Box background='light-1' align='center' pad='medium'>
      <Box width={width} direction='row'>
        <LngSelector />
      </Box>
      <Text>{t('copy-right')}</Text>
    </Box>
  )
}

export default MyFooter