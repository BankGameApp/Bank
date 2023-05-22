import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    // ...other color definitions
  },
  // Dark mode variant
  darkMode: {
    // Set the color mode to dark
    initialColorMode: 'dark',
  },
})

export { theme }
