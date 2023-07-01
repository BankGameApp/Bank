export const rules = [
  { rule: 'The game requires a minimum of two players. Each player takes turns rolling the two dice.' },
  { rule: 'On the first three rolls, if a 7 is rolled, it is worth 70 points. Doubles are worth their regular score.' },
  { rule: 'Players take turns rolling the dice and adding up the score after each roll. The score is summed together until all players have banked or a 7 is rolled.' },
  { rule: 'After three rolls, if a 7 is rolled, the sum total becomes 0. However, if doubles are rolled, the current total is doubled.' },
  { rule: 'A round continues until a 7 is rolled or until all players have chosen to "bank" their score.' },
  { rule: 'When a player rolls, the score is added to the rounds total. However, the player does not receive those points immediately unless they choose to "bank."' },
  { rule: 'Once a player chooses to "bank," they take the current total sum of the round and add it to their score. The round starts over with a total sum of 0.' },
  { rule: 'Once a player has banked, they are no longer able to roll, bank, or unbank. They must wait for the round to end.' },
  { rule: 'If a 7 is rolled, players are no longer able to bank their score, and the round starts over with a total sum of 0. Players who have already banked are unaffected.' },
  { rule: 'The game continues with a predetermined number of rounds, which can be set at 10, 15, or 20 rounds.' },
  { rule: 'At the end of the specified number of rounds, the player with the highest score wins the game. If there is a tie, the players with the highest score share the victory.' },
]