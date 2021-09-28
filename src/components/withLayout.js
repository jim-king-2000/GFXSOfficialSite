import MyHeader from '../components/MyHeader'
import MyBody from '../components/MyBody'
import MyFooter from '../components/MyFooter'
import Head from 'next/head'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'
import useTranslation from 'next-translate/useTranslation'

const WIDTH = '1280px'

function withLayout(Content) {
  return () => {
    const { t } = useTranslation('common')
    return (
      <Grommet full theme={grommet}>
        <Head>
          <title>{t('brand')}</title>
        </Head>
        <Box flex={false} responsive={false} width={{ min: WIDTH }} overflow='auto'>
          <MyHeader width={WIDTH} />
          <MyBody width={WIDTH} Content={Content} />
          <MyFooter width={WIDTH} />
        </Box>
      </Grommet>
    )
  }
}

export default withLayout