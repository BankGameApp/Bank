import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Box,
} from '@chakra-ui/react'
import {
  Game,
  PlayerDrawer,
  RoundDropdown,
  RulesTooltip,
  ToggleTheme,
} from '../components'

const Home = () => {
  const [players, setPlayers] = useState([])
  const [rounds, setRounds] = useState(10)

  return (
    <>
      <Flex
        borderBottom="1px solid"
        justify='space-between'
        alignItems='center'
        paddingBottom='2'
        marginBottom='5'
      >
        <Flex>
          <Heading textAlign='center' marginRight='2'>Bank!</Heading>
          <RulesTooltip />
        </Flex>
        <Flex>
          <ToggleTheme />
          <Box marginLeft='2'>
            <PlayerDrawer
              players={players}
              setPlayers={setPlayers}
            />
          </Box>
          <Box marginLeft='2'>
            <RoundDropdown rounds={rounds} setRounds={setRounds} />
          </Box>
        </Flex>
      </Flex>

      <Box>
        <Game players={players} rounds={rounds} />
      </Box>
    </>
  )
}

export default Home
