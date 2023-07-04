import React, { useEffect, useState } from 'react'
import { Center, Text } from '@chakra-ui/react'
import DiceRoller from './DiceRoller'

const Game = ({ players, rounds, roundScore, setRoundScore, setGameOver }) => {
  const [diceRollCount, setDiceRollCount] = useState(0)
  const [currentRound, setCurrentRound] = useState(0)
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
      setDiceRollCount(0)
      setCurrentRound(prevRound => prevRound + 1)
    }
    setRoundScore(diceRollSum)
  }, [score])

  useEffect(() => {
    if (currentRound === rounds) {
      setGameOver(true)
    }
  }, [currentRound])

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
