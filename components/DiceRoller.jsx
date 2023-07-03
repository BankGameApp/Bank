import React, { useState, useEffect } from 'react';
import { Grid, Flex, Button, useColorMode } from '@chakra-ui/react';

const DiceRoller = ({ setScore }) => {
  const { colorMode } = useColorMode()
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [rolling, setRolling] = useState(false);

  const generateRandomDiceArrays = async () => {
    setRolling(true);

    for (let i = 0; i < 10; i++) {
      let num1, num2;

      do {
        num1 = Math.floor(Math.random() * 6) + 1;
      } while (i > 0 && num1 === dice1);

      do {
        num2 = Math.floor(Math.random() * 6) + 1;
      } while (i > 0 && num2 === dice2);

      setDice1(num1);
      setDice2(num2);

      // wait 100 ms before setting next dice set
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setRolling(false);
  };

  const returnDiceImg = (diceValue) => {
    const color = colorMode === 'dark' ? 'Light' : 'Dark';
    const diceImage = `/Dice/${diceValue}Dice${color}.png`;

    return diceImage;
  }

  useEffect(() => {
    if (!rolling && dice1 && dice2) {
      setScore({ sum: dice1 + dice2, diceSet: [dice1, dice2] })
    }

    const clearDice = () => {
      setDice1(null);
      setDice2(null);
    }

    const timer = setInterval(() => {
      clearDice();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [rolling, dice1, dice2])

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Button
        isDisabled={rolling}
        onClick={generateRandomDiceArrays}
        marginBottom={2}
      >
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </Button>
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap={4}
        justifyContent='center'
      >
        <Flex alignItems='center' justifyContent='center' margin={2}>
          {dice1 && <img src={returnDiceImg(dice1)} width={100} height={100} />}
        </Flex>
        <Flex alignItems='center' justifyContent='center' margin={2}>
          {dice2 && <img src={returnDiceImg(dice2)} width={100} height={100} />}
        </Flex>
      </Grid>
    </Flex>
  );
};

export default DiceRoller;
