import React, { useEffect, useState } from 'react'
import { Center, Text } from '@chakra-ui/react'
import DiceRoller from './DiceRoller'

const Game = ({ players, rounds, roundScore, setRoundScore, setGameOver, playersInRound, setPlayersInRound }) => {
  const [diceRollCount, setDiceRollCount] = useState(0)
  const [currentRound, setCurrentRound] = useState(1)
  const [score, setScore] = useState({
    sum: 0,
    diceSet: []
  })

  useEffect(() => {
    const { sum, diceSet } = score
    // default addition
    let diceRollSum = sum + roundScore

    if (diceRollCount < 3) {
      if (sum === 7) {
        diceRollSum = 70 + roundScore
      }
    } else {
      if (sum === 7) {
        diceRollSum = 0
      }

      if (diceSet[0] === diceSet[1]) {
        diceRollSum = roundScore * 2
      }
    }

    // handle round dice rolls
    if (diceRollSum) {
      setDiceRollCount(prevValue => prevValue + 1)
    } else {
      // if dice roll count hit a 7 and is now 0
      setDiceRollCount(0)
      // if dice have been rolled and a 7 has been rolled after round 3, increase round
      // and update players in round
      if (score.sum && score.diceSet.length) {
        const newRoundPlayers = players.map(player => player.name)
        setPlayersInRound(newRoundPlayers)

        setCurrentRound(prevRound => prevRound + 1)
      }
    }
    setRoundScore(diceRollSum)
  }, [score])

  useEffect(() => {
    if (currentRound === rounds) {
      setGameOver(true)
    }
  }, [currentRound])

  useEffect(() => {
    // handle updating players in the round
    // each time the round resets or the playersInRound is empty
    if (players.length && !playersInRound.length) {
      const newRoundPlayers = players.map(player => player.name)

      setPlayersInRound(newRoundPlayers)
    }

    // if score has been set and playersInRound is empty then we need to reset round
    // this will happen after every player has banked
    if (score.sum && score.diceSet && !playersInRound.length) {
      setDiceRollCount(0)
      setCurrentRound(prevRound => prevRound + 1)
      setRoundScore(0)
    }
  }, [score, players, playersInRound])

  return (
    <>
      <Center>
        <Text fontWeight='thin' fontSize='8xl'>{roundScore.toLocaleString()}</Text>
      </Center>
      <Center>
        <Text fontWeight='thin' fontSize='2xl'>Rolls: {diceRollCount}</Text>
      </Center>
      <Center mb={5}>
        <Text fontWeight='thin' fontSize='2xl'>Round: {currentRound}</Text>
      </Center>

      <DiceRoller setScore={setScore} />
    </>
  )
}

export default Game
