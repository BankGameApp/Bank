import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Box,
} from '@chakra-ui/react'
import {
  Game,
  PlayerDrawer,
  ToggleTheme,
} from '../components'

const Home = () => {
  const [players, setPlayers] = useState([])

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
        <Flex>
          <ToggleTheme />
          <Box marginLeft='2'>
            <PlayerDrawer
              players={players}
              setPlayers={setPlayers}
            />
          </Box>
        </Flex>
      </Flex>

      <Box>
        <Game />
      </Box>
    </>
  )
}

export default Home
