import { useState } from 'react';
import { Heading, Button, Link, UnorderedList, ListItem, VStack, Box, StackDivider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { usePromiseWrapper } from 'chigiri';

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const Example = () => {
  const [returnedValue, setReturnedValue] = useState('');
  const [returnedValues, setReturnedValues] = useState(['', '', '']);
  const { triggerPromise } = usePromiseWrapper();

  const repeatTriggerPromise = async () => {
    const newReturnedValues = [...returnedValues];
    for (let i = 0; i < 3; i++) {
      const result = await triggerPromise<string>();
      newReturnedValues[i] = result;
      setReturnedValues([...newReturnedValues]);
      await sleep(100);
    }
  }

  return <VStack
    divider={<StackDivider borderColor='gray.200' />}
    spacing={4}
    align='stretch'
  >
    <Box>
      <Heading>usePromiseWrapper Example</Heading>
      <Heading size='md'>
        (<Link href='/' isExternal>
          Source Code <ExternalLinkIcon mx='2px' />
        </Link>)
      </Heading>
      <Button mt={4} onClick={() => triggerPromise<string>().then(setReturnedValue)}>Open Modal (Trigger Promise)</Button>
      <Heading mt={4} size='md'>Returned Value: {returnedValue}</Heading>
    </Box>

    <Box>
      <Heading>repeating usePromiseWrapper calls example</Heading>
      <Heading size='md'>
        (<Link href='/' isExternal>
          Source Code <ExternalLinkIcon mx='2px' />
        </Link>)
      </Heading>
      <Button mt={4} onClick={() => repeatTriggerPromise()}>Open Modal (Trigger 3 Promises)</Button>
      <Heading mt={4} size='md'>Returned Values: </Heading>
      <UnorderedList>
        {returnedValues.map((value, index) => <ListItem key={`${index}-${value}`}>{value}</ListItem>)}
      </UnorderedList>
    </Box>
  </VStack>
}
