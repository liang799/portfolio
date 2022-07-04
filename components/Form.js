import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function Form() {
  return (
    <Stack>
      <Stack spacing={4}>
        <FormControl color="white" id="name">
          <FormLabel> Name</FormLabel>
          <Input bg={"black.form"} border={0} type="" />
        </FormControl>
        <FormControl color="white" id="email">
          <FormLabel>Email</FormLabel>
          <Input bg={"black.form"} border={0} type="email" />
        </FormControl>
        <FormControl color="white" id="msg">
          <FormLabel>Message</FormLabel>
          <Textarea bg={"black.form"} border={0} h={40} type="message" />
        </FormControl>
        <Stack pt={2}>
          <Button colorScheme="primary">Send Message</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
