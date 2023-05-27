import React from 'react'
import {
  Heading,
  Button,
  useColorMode,
  Flex,
  Box
} from '@chakra-ui/react'
import { Game, PlayerDrawer } from '../components'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex
        borderBottom="1px solid"
        justify='space-between'
        alignItems='center'
        paddingBottom='2'
        marginBottom='5'
      >
        <Heading textAlign='center'>Bank!</Heading>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      <Box>
        <PlayerDrawer />
        <Game />
      </Box>
    </>
  )
}

export default Home
