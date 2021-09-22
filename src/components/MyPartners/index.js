import { Box, Anchor, Text } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyPartners() {
  const { t } = useTranslation('common')
  return (
    <Box margin='large' gap='large' align='center'>
      <Box direction='row' justify='between' fill='horizontal'>
        <Text>{t('partner-title')}</Text>
        <Box direction='row' gap='small' border='between'>
          <Anchor>{t('login')}</Anchor>
          <Anchor>{t('store')}</Anchor>
        </Box>
      </Box>
      <Box width='1440px' height='680px' background='white' />
      <Text>{t('partner-desc')}</Text>
    </Box>
  )
}

export default MyPartners