import { Box, Text } from 'grommet'
import { Webcam } from 'grommet-icons'
import useTranslation from 'next-translate/useTranslation'

function MyLogo({ size }) {
  const { t } = useTranslation('common')
  return (
    <Box direction='row' gap='small' align='center' margin='small'>
      <Webcam size={size} />
      <Text size={size}>{t('brand')}</Text>
    </Box>
  )
}

export default MyLogo