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
import React from "react";
import { Formik, Form, Field } from "formik";
import Submission from "./Submission.js";

export default function ContactForm() {
  // if (state.succeeded) {
  //   return <Submission />;
  // }

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (!value.match(re)) {
      error = "Please enter a valid email";
    }
    return error;
  }

  function validateMsg(value) {
    let error;
    if (!value) {
      error = "Message cannot be empty";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", msg: "" }}
      onSubmit={(values, actions) => {
        // do sql here
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={4}>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  color="white"
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel> Name</FormLabel>
                  <Input bg={"black.form"} border={0} {...field} />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  color="white"
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input bg={"black.form"} border={0} {...field} />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="msg" validate={validateMsg}>
              {({ field, form }) => (
                <FormControl
                  color="white"
                  isInvalid={form.errors.msg && form.touched.msg}
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea bg={"black.form"} border={0} h={40} {...field} />
                  <FormErrorMessage>{form.errors.msg}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Stack pt={2} pb={10}>
              <Button
                colorScheme="primary"
                type="submit"
                isLoading={props.isSubmitting}
              >
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
