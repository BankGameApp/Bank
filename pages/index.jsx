import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Box,
  Center,
} from '@chakra-ui/react'
import {
  Game,
  PlayerDrawer,
  PopoverButton,
  RoundDropdown,
  RulesTooltip,
  ToggleTheme,
} from '../components'

const Home = () => {
  const [players, setPlayers] = useState([])
  const [rounds, setRounds] = useState(10)
  const [gameStarted, setGameStarted] = useState(false)

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
              gameStarted={gameStarted}
            />
          </Box>
          <Box marginLeft='2'>
            <RoundDropdown rounds={rounds} setRounds={setRounds} disabled={gameStarted} />
          </Box>
        </Flex>
      </Flex>

      <Box>
        {gameStarted ? (
          <Game players={players} rounds={rounds} />
        ) : (
          <Center>
            <PopoverButton
              disabled={players.length < 2}
              popoverMessage='You need at least 2 players to play.'
              buttonLabel='Play'
              onClick={() => setGameStarted(true)}
            />
          </Center>
        )}
      </Box>
    </>
  )
}

export default Home
