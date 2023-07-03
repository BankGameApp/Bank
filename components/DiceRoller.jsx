import React, { useState, useEffect } from 'react';
import { Grid, Flex, Button, useColorMode } from '@chakra-ui/react';

const DiceRoller = ({ setScore }) => {
  const { colorMode } = useColorMode()
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [rolling, setRolling] = useState(false);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  const generateRandomDiceSet = async () => {
    setRolling(true);

    for (let i = 0; i < 10; i += 1) {
      const num1 = generateRandomNumber()
      const num2 = generateRandomNumber()

      setDice1(num1);
      setDice2(num2);

      // wait 100 ms before setting next dice set
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setRolling(false);
  };

  const returnDiceSrc = (diceValue) => {
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

  const returnDiceImg = (dice) => {
    if (!dice) return

    return (
      <Flex alignItems='center' justifyContent='center' margin={2}>
        <img src={returnDiceSrc(dice)} width={100} height={100} />
      </Flex>
    )
  }

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Button
        isDisabled={rolling}
        onClick={generateRandomDiceSet}
        marginBottom={2}
      >
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </Button>
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap={4}
        justifyContent='center'
      >
        {returnDiceImg(dice1)}
        {returnDiceImg(dice2)}
      </Grid>
    </Flex>
  );
};

export default DiceRoller;
