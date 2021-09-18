import { Box, Anchor } from 'grommet'
import { Search, User, Cart } from 'grommet-icons'
import useTranslation from 'next-translate/useTranslation'

function MyFunc() {
  const { t } = useTranslation('common')
  return (
    <Box direction='row' gap='large' align='center' margin='small'>
      <Anchor>{t('shop')}</Anchor>
      <Search />
      <User />
      <Cart />
    </Box>
  )
}

export default MyFunc