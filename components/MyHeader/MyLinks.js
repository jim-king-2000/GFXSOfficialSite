import { Box, Anchor, DropButton, Heading } from 'grommet'

function ProductCenter() {
  return <DropButton
    dropAlign={{ top: 'bottom', left: 'left' }}
    dropContent={
      <Box direction='row' gap='small' margin='large'>
        <Box gap='small'>
          <Heading level={3}>视觉类</Heading>
          <Anchor>产品1</Anchor>
          <Anchor>产品2</Anchor>
          <Anchor>产品3</Anchor>
        </Box>
        <Box gap='small'>
          <Heading level={3}>位置类</Heading>
          <Anchor>产品4</Anchor>
          <Anchor>产品5</Anchor>
          <Anchor>产品6</Anchor>
        </Box>
        <Box gap='small'>
          <Heading level={3}>工具类</Heading>
          <Anchor>产品7</Anchor>
          <Anchor>产品8</Anchor>
          <Anchor>产品9</Anchor>
        </Box>
      </Box>
    }
  >
    <Anchor>产品中心</Anchor>
  </DropButton>
}

function MyLinks() {
  return <Box direction='row' align='center' flex justify='between' margin='small'>
    <Anchor>首页</Anchor>
    <ProductCenter />
    <Anchor>开发者</Anchor>
    <Anchor>平台</Anchor>
    <Anchor>关于光方</Anchor>
  </Box>
}

export default MyLinks