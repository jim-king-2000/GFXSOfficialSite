import MyHeader from '../components/MyHeader'
import MyBody from '../components/MyBody'
import MyFooter from '../components/MyFooter'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'

const WIDTH = '1440px'

function withLayout(Content) {
  return () => (
    <Grommet full theme={grommet}>
      <Box flex={false} responsive={false} width={{ min: WIDTH }} overflow='auto'>
        <MyHeader width={WIDTH} />
        <MyBody width={WIDTH} Content={Content} />
        <MyFooter width={WIDTH} />
      </Box>
    </Grommet>
  )
}

export default withLayout