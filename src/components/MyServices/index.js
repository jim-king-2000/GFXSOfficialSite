import { Box, Heading, Anchor } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyServices() {
  const { t } = useTranslation('common')
  return (
    <Box gap='large' margin='large'>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('questions')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('faq')}</Anchor>
          <Anchor>{t('account')}</Anchor>
          <Anchor>{t('support')}</Anchor>
          <Anchor>{t('need-to-know')}</Anchor>
          <Anchor>{t('support-services')}</Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('networking-service')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('account')}</Anchor>
          <Anchor>{t('device-management')}</Anchor>
          <Anchor>{t('order')}</Anchor>
          <Anchor>{t('support-services')}</Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('download-center')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('user-guide')}</Anchor>
          <Anchor>{t('client')}</Anchor>
        </Box>
      </Box>
    </Box>
  )
}

export default MyServices