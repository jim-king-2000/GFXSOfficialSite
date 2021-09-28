import { Box, Heading, Text, Anchor } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyProducts() {
  const { t } = useTranslation('common')

  return (
    <Box align='center' gap='large' margin='large'>
      <Heading margin='none'>{t('product-center')}</Heading>
      <Box fill='horizontal' gap='large' border='between'>
        <Box direction='row' justify='between' align='center'>
          <Heading margin='none' level={3}>{t('modules')}</Heading>
          <Anchor>{t('more')} &gt;</Anchor>
        </Box>
        <Box gap='small'>
          <Box direction='row' justify='between'>
            <Heading margin='none' level={3}>{t('class-visual')}</Heading>
            <Box>
              <Box width='300px' height='300px' background='white' />
              <Text width='300px' textAlign ='center'>{t('camera-3d')}</Text>
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
              <Text width='300px' textAlign ='center'>{t('camera-3d-uvc')}</Text>
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
          </Box>
          <Box direction='row' justify='between'>
            <Heading margin='none' level={3}>{t('class-network')}</Heading>
            <Box>
              <Box width='300px' height='300px' background='white' />
              <Text width='300px' textAlign ='center'>{t('cat-one')}</Text>
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
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
            <Box>
              <Box width='300px' height='300px' background='white' />
              <Text width='300px' textAlign ='center'>{t('mtk8788')}</Text>
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
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
            <Box>
              <Box width='300px' height='300px' background='white' />
              <Text width='300px' textAlign ='center'>{t('cat-one-kit')}</Text>
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
            <Box>
              <Box width='300px' height='300px' background='white' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MyProducts