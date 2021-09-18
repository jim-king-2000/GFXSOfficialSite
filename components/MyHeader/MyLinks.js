import { Box, Anchor, DropButton, Heading } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function ProductCenter() {
  const { t } = useTranslation('common')

  return <DropButton
    fill='vertical'
    dropAlign={{ top: 'bottom', left: 'left' }}
    dropContent={
      <Box direction='row' gap='large' margin='large'>
        <Box gap='small'>
          <Heading level={3}>模组</Heading>
          <Anchor>产品1</Anchor>
          <Anchor>产品2</Anchor>
          <Anchor>产品3</Anchor>
        </Box>
        <Box gap='small'>
          <Heading level={3}>核心板</Heading>
          <Anchor>产品4</Anchor>
          <Anchor>产品5</Anchor>
          <Anchor>产品6</Anchor>
        </Box>
        <Box gap='small'>
          <Heading level={3}>开发板</Heading>
          <Anchor>产品7</Anchor>
          <Anchor>产品8</Anchor>
          <Anchor>产品9</Anchor>
        </Box>
      </Box>
    }
  >
    <Anchor>{t('product-center')}</Anchor>
  </DropButton>
}

function MyLinks() {
  const { t } = useTranslation('common')

  return <Box direction='row' align='center' flex justify='between' margin={{ horizontal: 'small' }}>
    <Anchor>{t('home-page')}</Anchor>
    <ProductCenter />
    <Anchor>{t('developers')}</Anchor>
    <Anchor>{t('service')}</Anchor>
    <Anchor>{t('about')}</Anchor>
  </Box>
}

export default MyLinks