import React, { useState } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  List,
  ListItem,
  Text,
  useDisclosure,
  useToast,
  Flex,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { capitalizeText } from '../utils'
import { DeleteIcon } from '@chakra-ui/icons'

const PlayerDrawer = ({ players, setPlayers }) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newPlayer, setNewPlayer] = useState('')

  const addPlayer = () => {
    const doesNameExist = players.find(({ name }) => name.toLowerCase() === newPlayer.toLowerCase())
    const newPlayerName = capitalizeText(newPlayer)

    if (newPlayer && !doesNameExist) {
      const player = {
        name: newPlayerName,
        score: 0
      };

      setPlayers([...players, player])
    } else if (doesNameExist) {
      toast({
        title: 'Sorry',
        description: `Player with name ${newPlayerName} already exists`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }

    setNewPlayer('')
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      addPlayer()
    }
  }

  const deletePlayer = (index) => {
    const updatedPlayers = [...players]
    updatedPlayers.splice(index, 1)
    setPlayers(updatedPlayers)
  }

  return (
    <Box>
      <Button onClick={onOpen}>Manage Players</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Player</DrawerHeader>
          <DrawerBody>
            <InputGroup>
              <Input
                placeholder='Player Name'
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                onKeyDown={handleKeyDown}
                mb={2}
              />
              <InputRightElement width='auto'>
                <Button colorScheme='blue' onClick={addPlayer}>
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>

            <List mt={4}>
              {players.map((player, index) => (
                <ListItem key={index}>
                  <Flex
                    justify='space-between'
                    alignItems='center'
                  >
                    <Flex alignItems='center'>
                      <Text mr={3}>{player.name}</Text>
                      <DeleteIcon
                        color='red.400'
                        boxSize={4}
                        cursor='pointer'
                        onClick={() => deletePlayer(index)}
                      />
                    </Flex>
                    <Text ml={2}>Score: {player.score}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default PlayerDrawer
