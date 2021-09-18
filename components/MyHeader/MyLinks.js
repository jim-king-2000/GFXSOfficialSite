import Link from 'next/link'
import { Box, Anchor } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyLinks() {
  const { t } = useTranslation('common')

  return (
    <Box direction='row' align='center' flex justify='between' margin={{ horizontal: 'small' }}>
      <Link href='/'>
        <Anchor>{t('home-page')}</Anchor>
      </Link>
      <Link href='/products'>
        <Anchor>{t('product-center')}</Anchor>
      </Link>
      <Anchor>{t('developers')}</Anchor>
      <Anchor>{t('service')}</Anchor>
      <Anchor>{t('partners')}</Anchor>
      <Anchor>{t('about')}</Anchor>
    </Box>
  )
}

export default MyLinks