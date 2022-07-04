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
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return <Text color="white">Thanks for your submission!</Text>;
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl color="white" id="name" name="name">
            <FormLabel> Name</FormLabel>
            <Input bg={"black.form"} border={0} />
          </FormControl>
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <FormControl color="white" id="email" name="email">
            <FormLabel>Email</FormLabel>
            <Input bg={"black.form"} border={0} type="email" />
          </FormControl>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <FormControl color="white" id="message" name="message">
            <FormLabel>Message</FormLabel>
            <Textarea bg={"black.form"} border={0} h={40} type="message" />
          </FormControl>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Stack pt={2} pb={10}>
            <Button colorScheme="primary" type="submit" disabled={state.submitting}>
              Send Message
            </Button>
          </Stack>
          <ValidationError errors={state.errors} />
        </Stack>
      </form>
    </Stack>
  );
}
