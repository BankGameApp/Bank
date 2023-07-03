import React from 'react'
import { Select } from '@chakra-ui/react'

const RoundDropdown = ({ rounds, setRounds, disabled }) => {
  const handleRoundChange = (event) => {
    setRounds(parseInt(event.target.value))
  }

  return (
    <Select value={rounds} onChange={handleRoundChange} isDisabled={disabled}>
      <option value={10}>Rounds: 10</option>
      <option value={15}>Rounds: 15</option>
      <option value={20}>Rounds: 20</option>
    </Select>
  )
}

export default RoundDropdown
