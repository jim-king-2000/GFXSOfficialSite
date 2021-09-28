import LngSelector from './LngSelector'
import { Box, Text, Anchor } from 'grommet'
import useTranslation from 'next-translate/useTranslation'

function MyFooter({ width }) {
  const { t } = useTranslation('common')
  return (
    <Box background='light-1' align='center' pad='medium'>
      <Box width={width} direction='row'>
        <LngSelector />
      </Box>
      <Box direction='row' gap='small'>
        <Text>{t('copy-right')}</Text>
        <Anchor href='https://beian.miit.gov.cn' label='沪ICP备2021027599号' target="_Blank"/>
      </Box>
    </Box>
  )
}

export default MyFooter