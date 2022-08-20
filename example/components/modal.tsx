import { useEffect, useState } from 'react';
import * as Chakra from '@chakra-ui/react'
import { usePromiseWrapper } from 'chigiri'

export const Modal = () => {
  const [inputValue, setInputValue] = useState('');
  const { isOpen, resolve, reject } = usePromiseWrapper();
  const { onOpen, onClose } = Chakra.useDisclosure()

  useEffect(() => {
    if (isOpen) onOpen();
    else onClose();
  }, [isOpen])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    resolve(inputValue);
    onClose();
  }

  return <Chakra.Modal
    isOpen={isOpen}
    onClose={() => reject()}
  >
    <Chakra.ModalContent>
      <Chakra.ModalHeader>Example Modal</Chakra.ModalHeader>
      <Chakra.ModalCloseButton />
      <Chakra.ModalBody>
        <Chakra.FormControl onSubmit={handleSubmit}>
          <Chakra.FormLabel>Enter a value to be returned to the control!</Chakra.FormLabel>
          <Chakra.Input type="text" value={inputValue} onChange={handleInput} />
        </Chakra.FormControl>
      </Chakra.ModalBody>
      <Chakra.ModalFooter>
        <Chakra.Button onClick={handleSubmit}>
          Submit
        </Chakra.Button>
      </Chakra.ModalFooter>
    </Chakra.ModalContent>
  </Chakra.Modal>

}