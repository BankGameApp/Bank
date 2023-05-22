import React from 'react'
import {
  Heading,
  Button,
  useColorMode,
  Flex
} from '@chakra-ui/react'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex justify='space-between' alignItems='center'>
      <Heading textAlign='center'>Bank!</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  )
}

export default Home
