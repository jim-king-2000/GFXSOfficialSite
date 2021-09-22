import { Box, Text } from 'grommet'
import { Webcam } from 'grommet-icons'

function MyLogo({ size }) {
  return (
    <Box direction='row' gap='small' align='center' margin='small'>
      <Webcam size={size} />
      <Text size={size}>光方<br />讯视</Text>
    </Box>
  )
}

export default MyLogo