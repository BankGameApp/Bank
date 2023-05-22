import { Container } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Container maxW="container.lg" py={8}>
      {children}
    </Container>
  )
}

export default Layout
