import { Box } from 'grommet'
import { Search, User, Cart } from 'grommet-icons'

function MyFunc() {
  return <Box direction='row' gap='medium' align='center'>
    <Search />
    <User />
    <Cart />
  </Box>
}

export default MyFunc