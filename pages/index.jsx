import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Box,
  Center,
  Text,
  Button,
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
  const [playersInRound, setPlayersInRound] = useState([])
  const [rounds, setRounds] = useState(10)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [roundScore, setRoundScore] = useState(0)

  const formatOrdinalNumber = (number) => {
    const suffixes = ['st', 'nd', 'rd']
    const remainder = number % 10
    const ordinalSuffix = (number % 100 - remainder === 10) ? 'th' : suffixes[remainder - 1] || 'th'

    return number + ordinalSuffix
  }

  const handleReturn = () => {
    if (gameOver) {
      const sortedWinners = players.sort((a, b) => b.score - a.score)
      const winners = []

      sortedWinners.reduce((prevUser, currentUser, index) => {
        if (index === 0) {
          winners.push({ place: 1, name: currentUser.name, score: currentUser.score });
        } else if (currentUser.score === prevUser.score) {
          winners.push({ place: winners[index - 1].place, name: currentUser.name, score: currentUser.score });
        } else {
          winners.push({ place: index + 1, name: currentUser.name, score: currentUser.score });
        }

        return currentUser;
      }, null);

      return (
        <>
          <Center>
            <Text fontWeight='thin' fontSize='7xl'>Game Over!</Text>
          </Center>
          <Center>
            <Button onClick={() => window.location.reload()}>Play Again</Button>
          </Center>
          {winners.map((winner, index) => (
            <Box key={index}>
              <Text fontWeight='thin' fontSize='2xl'>Place: {formatOrdinalNumber(winner.place)}</Text>
              <Text fontWeight='thin' fontSize='2xl'>Name: {winner.name}</Text>
              <Text fontWeight='thin' fontSize='2xl'>Score: {winner.score.toLocaleString()}</Text>
              <br />
            </Box>
          ))}
        </>
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
          playersInRound={playersInRound}
          setPlayersInRound={setPlayersInRound}
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
    setPlayersInRound(prevPlayersInRound => prevPlayersInRound.filter(iName => iName !== name))
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
              gameOver={gameOver}
              bank={bankPlayerScore}
              playersInRound={playersInRound}
              roundScore={roundScore}
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
