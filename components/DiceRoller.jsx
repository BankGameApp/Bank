import React, { useState, useEffect } from 'react';
import { Grid, Flex, Button, Text, Center, useColorMode } from '@chakra-ui/react';

const DiceRoller = () => {
  const { colorMode } = useColorMode()
  const [numberOfDice] = useState(2);
  const [diceRolls, setDiceRolls] = useState([]);
  const [rolling, setRolling] = useState(false);
  console.log(diceRolls)

  useEffect(() => {
    let intervalId;

    if (rolling) {
      intervalId = setInterval(() => {
        const newDiceRolls = [];
        for (let i = 0; i < numberOfDice; i++) {
          const diceValue = Math.floor(Math.random() * 6) + 1;
          newDiceRolls.push(diceValue);
        }
        setDiceRolls(newDiceRolls);
      }, 150); // Interval duration of 150ms

      // Stop rolling after 2 seconds (2000ms)
      setTimeout(() => {
        clearInterval(intervalId);
        setRolling(false);
      }, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [rolling, numberOfDice]);

  const rollDice = () => {
    if (!rolling) {
      setDiceRolls([]);
      setRolling(true);
    }
  };

  const renderDice = (diceValue) => {
    const color = colorMode === 'dark' ? 'Light' : 'Dark'
    const diceImage = `/Dice/${diceValue}Dice${color}.png`

    return (
      <Center>
        <img src={diceImage} alt={`Dice ${diceValue}`} width={100} height={100} />
      </Center>
    )
  };

  const renderDiceRolls = () => {
    return diceRolls.map((roll, index) => (
      <Flex key={index} alignItems='center' justifyContent='center' margin={2}>
        {renderDice(roll)}
      </Flex>
    ));
  };

  const totalSum = diceRolls.reduce((total, roll) => total + roll, 0);

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Button
        disabled={rolling}
        onClick={rollDice}
        marginBottom={4}
      >
        Roll Dice
      </Button>
      {rolling ? (
        <Text fontSize='xl'>Rolling...</Text>
      ) : (
        <Text fontSize='xl'>Total Sum: {totalSum}</Text>
      )}
      <Grid
        templateColumns={`repeat(${numberOfDice}, 1fr)`}
        gap={4}
        justifyContent='center'
        marginTop={8}
      >
        {renderDiceRolls()}
      </Grid>
    </Flex>
  );
};

export default DiceRoller;
