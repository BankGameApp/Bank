import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { theme } from './theme'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
