import { Header, Box } from 'grommet'
import MyLogo from './MyLogo'
import MyLinks from './MyLinks'
import MyFunc from './MyFunc'

function MyHeader({ width }) {
  return <Header background='white' justify='center'>
    <Box width={width} direction='row' justify='between' border='between' gap='small'>
      <MyLogo size='large' />
      <MyLinks />
      <MyFunc />
    </Box>
  </Header>
}

export default MyHeader