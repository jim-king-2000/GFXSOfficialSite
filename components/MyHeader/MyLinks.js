import { Box, Anchor } from 'grommet'

function MyLinks() {
  return <Box direction='row' gap='large' align='center'>
    <Anchor>首页</Anchor>
    <Anchor>产品中心</Anchor>
    <Anchor>典型应用</Anchor>
    <Anchor>社区文档</Anchor>
    <Anchor>其它平台</Anchor>
  </Box>
}

export default MyLinks