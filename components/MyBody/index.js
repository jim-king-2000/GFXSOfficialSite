import { Box, Text } from 'grommet'

function MyBody({ width }) {
  return <Box background='light-4' height='700px' align='center'>
    <Box width={width}>
      <Text>网站建设中……</Text>
    </Box>
  </Box>
}

export default MyBody