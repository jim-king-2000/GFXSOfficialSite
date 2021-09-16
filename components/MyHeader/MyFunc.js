import { Box } from 'grommet'
import { Search, User, Cart } from 'grommet-icons'

function MyFunc() {
  return <Box direction='row' gap='large' align='center' margin='small'>
    <Search />
    <User />
    <Cart />
  </Box>
}

export default MyFunc