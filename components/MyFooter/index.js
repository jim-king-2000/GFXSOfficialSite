import { Box, Text } from 'grommet'

function MyFooter({ width }) {
  return <Box background='light-1' align='center'>
    <Box width={width}>
      <Text>My Footer</Text>
    </Box>
  </Box>
}

export default MyFooter