import React, { useState } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  List,
  ListItem,
  Text,
  useDisclosure,
  useToast,
  Flex
} from '@chakra-ui/react'

const PlayerDrawer = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState('')

  const addPlayer = () => {
    const doesNameExist = players.find(({ name }) => name.toLowerCase() === newPlayer.toLowerCase())

    if (newPlayer && !doesNameExist) {
      const player = {
        name: newPlayer,
        score: 0
      };

      // set new player and sort the player list alphabetically
      setPlayers([...players, player].sort((a, b) => a.name.localeCompare(b.name)))
    } else if (doesNameExist) {
      toast({
        title: 'Sorry',
        description: `Player with name ${newPlayer} already exists`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }

    setNewPlayer('')
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
            <Input placeholder="Player Name" value={newPlayer} onChange={(e) => setNewPlayer(e.target.value)} mb={2} />

            <List mt={4}>
              {players.map((player, index) => (
                <ListItem key={index}>
                  <Flex
                    justify='space-between'
                    alignItems='center'
                  >
                    <Text>{player.name}</Text>
                    <Text ml={2}>Score: {player.score}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={addPlayer}>
              Add Player
            </Button>
            <Button onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default PlayerDrawer
