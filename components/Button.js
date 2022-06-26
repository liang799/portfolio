import { Button, Text } from '@chakra-ui/react';

export default function RoundButton(props) {
  return (
      <Button
        py={["10px", "30px"]}
        px={["10px", "33px"]}
        fontSize={["20px", "33px"]}
        rounded={'full'}
        bg={'primary.400'}
        color={'white'}
        _hover={{
          bg: 'primary.500',
        }}
        _focus={{
          bg: 'primary.500',
        }}>
        {props.text}
      </Button>
  );
}
