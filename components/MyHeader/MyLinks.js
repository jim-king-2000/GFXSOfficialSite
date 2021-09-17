import { Box, Anchor, DropButton, Heading } from 'grommet'

function ProductCenter() {
  return <DropButton
    fill='vertical'
    dropAlign={{ top: 'bottom', left: 'left' }}
    dropContent={
      <Box direction='row' gap='large' margin='large'>
        <Box gap='small'>
          <Heading level={3}>模组</Heading>
          <Anchor>产品1</Anchor>
          <Anchor>产品2</Anchor>
          <Anchor>产品3</Anchor>
        </Box>
        <Box gap='small'>
          <Heading level={3}>核心板</Heading>
          <Anchor>产品4</Anchor>
          <Anchor>产品5</Anchor>
          <Anchor>产品6</Anchor>
        </Box>
        <Box gap='small'>
          <Heading level={3}>开发板</Heading>
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
  return <Box direction='row' align='center' flex justify='between'>
    <Anchor>首页</Anchor>
    <ProductCenter />
    <Anchor>开发者</Anchor>
    <Anchor>平台</Anchor>
    <Anchor>关于光方</Anchor>
  </Box>
}

export default MyLinks