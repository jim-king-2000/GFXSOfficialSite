import { Box, Anchor } from 'grommet'

function MyLinks() {
  return <Box direction='row' align='center' flex justify='between' margin='small'>
    <Anchor>首页</Anchor>
    <Anchor>产品中心</Anchor>
    <Anchor>开发者</Anchor>
    <Anchor>平台</Anchor>
    <Anchor>关于光方</Anchor>
  </Box>
}

export default MyLinks