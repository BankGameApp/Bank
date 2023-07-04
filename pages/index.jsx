import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Box,
  Center,
  Text,
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
  const [gameOver, setGameOver] = useState(false)
  const [roundScore, setRoundScore] = useState(0)

  const handleReturn = () => {
    if (gameOver) {
      return (
        <Center>
          <Text fontWeight='thin' fontSize='7xl'>Game Over!</Text>
        </Center>
      )
    }

    if (gameStarted) {
      return (
        <Game
          players={players}
          rounds={rounds}
          roundScore={roundScore}
          setRoundScore={setRoundScore}
          setGameOver={setGameOver}
        />
      )
    } else {
      return (
        <Center>
          <PopoverButton
            disabled={players.length < 2}
            popoverMessage='You need at least 2 players to play.'
            buttonLabel='Play'
            onClick={() => setGameStarted(true)}
          />
        </Center>
      )
    }
  }

  const bankPlayerScore = ({ name }) => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.name === name ? { ...player, score: player.score + roundScore } : player
      )
    )
  }

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
              bank={bankPlayerScore}
            />
          </Box>
          <Box marginLeft='2'>
            <RoundDropdown rounds={rounds} setRounds={setRounds} disabled={gameStarted} />
          </Box>
        </Flex>
      </Flex>

      <Box>
        {handleReturn()}
      </Box>
    </>
  )
}

export default Home
