import { Box, Heading, Anchor } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyDevelopers() {
  const { t } = useTranslation('common')
  return (
    <Box gap='large' margin='large'>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('getting-started')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('overview')}</Anchor>
          <Anchor>SDK 1.0</Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('resources')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('document')}</Anchor>
          <Anchor>{t('sample-code')}</Anchor>
          <Anchor>{t('tools')}</Anchor>
          <Anchor>{t('white-papers')}</Anchor>
          <Anchor>{t('videos-tutorials')}</Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('3rd-softwares')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('softwares-for-guangfang')}</Anchor>
          <Anchor>{t('vendors')}</Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('community')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Anchor>{t('forum')}</Anchor>
          <Anchor>{t('seminar-activity')}</Anchor>
        </Box>
      </Box>
    </Box>
  )
}

export default MyDevelopers