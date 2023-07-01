import React from 'react'
import {
  OrderedList,
  ListItem,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { rules } from '../utils'

const RulesTooltip = () => {
  return (
    <Popover placement='bottom-end' closeOnBlur>
      <PopoverTrigger>
        <Icon as={InfoOutlineIcon} boxSize={4} />
      </PopoverTrigger>
      <PopoverContent padding='4' width='800px'>
        <PopoverArrow />
        <PopoverBody>
          <OrderedList>
            {rules.map((i, k) => (
              <ListItem key={k}>{i.rule}</ListItem>
            ))}
          </OrderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default RulesTooltip;

