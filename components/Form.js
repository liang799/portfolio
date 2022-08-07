import {
  Heading,
  Link,
  Text,
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
import React from "react";
import { Formik } from "formik";
import Submission from "./Submission.js";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbjwvlql");

  if (state.succeeded) {
    return <Submission />;
  }

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        // do sql here
      }}
    >
      {(props) => (
        <Stack spacing={4}>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl color="white" isInvalid={form.errors.name && form.touched.name}>
                <FormLabel> Name</FormLabel>
                <Input bg={"black.form"} border={0} {..field} />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <FormControl color="white" id="email">
            <FormLabel>Email</FormLabel>
            <Input bg={"black.form"} border={0} type="email" name="email" />
          </FormControl>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <FormControl color="white" id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              bg={"black.form"}
              border={0}
              h={40}
              type="message"
              name="message"
            />
          </FormControl>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Stack pt={2} pb={10}>
            <Button
              colorScheme="primary"
              type="submit"
              isLoading={state.submitting}
            >
              Send Message
            </Button>
          </Stack>
          <ValidationError errors={state.errors} />
        </Stack>
      )}
    </Formik>
  );
}
