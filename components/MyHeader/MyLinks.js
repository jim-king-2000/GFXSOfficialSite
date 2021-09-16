import { Box, Anchor, DropButton, Heading, Text } from 'grommet'

function Preface() {
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
    <Text>首页</Text>
  </DropButton>
}

function MyLinks() {
  return <Box direction='row' align='center' flex justify='between' margin='small'>
    <Preface />
    <Anchor>产品中心</Anchor>
    <Anchor>开发者</Anchor>
    <Anchor>平台</Anchor>
    <Anchor>关于光方</Anchor>
  </Box>
}

export default MyLinks