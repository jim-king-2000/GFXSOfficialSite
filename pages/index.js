import MyHeader from '../components/MyHeader'
import MyBody from '../components/MyBody'
import MyFooter from '../components/MyFooter'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

const WIDTH = '1440px'

function HomePage() {
  return <Grommet full theme={grommet}>
    <MyHeader width={WIDTH} />
    <MyBody width={WIDTH} />
    <MyFooter width={WIDTH} />
  </Grommet>
}

export default HomePage