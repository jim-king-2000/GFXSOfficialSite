import { Box } from 'grommet'
import LngSelector from './LngSelector'

function MyFooter({ width }) {
  return (
    <Box background='light-1' align='center' pad='medium'>
      <Box width={width} direction='row'>
        <LngSelector />
      </Box>
    </Box>
  )
}

export default MyFooter