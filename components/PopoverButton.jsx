import React from 'react';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, Tooltip } from "@chakra-ui/react";

const PopoverButton = ({ disabled, popoverMessage, buttonLabel, onClick }) => (
  <Popover>
    <PopoverTrigger>
      <Tooltip label={disabled ? popoverMessage : ""} placement="top" isDisabled={!disabled}>
        <Button
          isDisabled={disabled}
          onClick={onClick}
        >
          {buttonLabel}
        </Button>
      </Tooltip>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverBody>{popoverMessage}</PopoverBody>
    </PopoverContent>
  </Popover>
);

export default PopoverButton;
