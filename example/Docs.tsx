import { PromiseProvider } from 'chigiri';
import { Modal, Example } from './components'
import { ChakraProvider, Container } from '@chakra-ui/react'

export function Docs() {
  return <ChakraProvider>
    <PromiseProvider>
      <Container mt={4}>
        <Example />
      </Container>
      <Modal />
    </PromiseProvider>
  </ChakraProvider>;
}
