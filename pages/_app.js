import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { theme } from './theme'
import Layout from '../components/Layout'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
