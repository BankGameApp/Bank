import React, { useState } from 'react'
import DiceRoller from './DiceRoller'

const Game = ({ players }) => {
  const [score, setScore] = useState({
    sum: 0,
    diceSet: []
  })
  console.log(players, score)

  return (
    <>
      <DiceRoller setScore={setScore} />
    </>
  )
}

export default Game
