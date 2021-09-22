import { Box, Heading, Text, Anchor } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyProducts() {
  const { t } = useTranslation('common')

  return (
    <Box align='center' gap='large' margin='large'>
      <Heading margin='none'>{t('product-center')}</Heading>
      <Text>{t('products-prompt')}</Text>
      <Box width='640px' height='480px' background='white' />
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('modules')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Box direction='row' justify='between'>
            <Heading margin='none' level={3}>{t('class-visual')}</Heading>
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
          </Box>
          <Box direction='row' justify='between'>
            <Heading margin='none' level={3}>{t('class-network')}</Heading>
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
          </Box>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('boards-core')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Box direction='row' justify='between'>
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
          </Box>
        </Box>
      </Box>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('boards-dev')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Box direction='row' justify='between'>
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
            <Box width='300px' height='300px' background='white' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MyProducts