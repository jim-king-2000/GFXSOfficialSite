import { Box } from 'grommet'

function MyBody({ width, Content }) {
  return (
    <Box background='light-4' align='center'>
      <Box width={width}>
        <Content />
      </Box>
    </Box>
  )
}

export default MyBody