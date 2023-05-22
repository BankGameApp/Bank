import React from 'react'
import { Heading, Box, Button, useColorMode } from '@chakra-ui/react'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Heading>Hello Chakra UI!</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default Home
