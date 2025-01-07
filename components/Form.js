import {
  useToast,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Stack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

export default function ContactForm() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', or 'success'
  const isLoading = status === 'submitting';

  function validateName(value) {
    if (!value.trim()) {
      return "Name is required";
    }
  }

  function validateEmail(value) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!value.trim()) {
      return "Email is required";
    }
    if (!value.match(re)) {
      return "Please enter a valid email";
    }
  }

  function validateMsg(value) {
    if (!value.trim()) {
      return "Message cannot be empty";
    }
  }

  const toast = useToast();

  const insertData = async (values) => {
    setStatus("submitting");
    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
      }
    }
    formData.append("access_key", "a56c45ff-43f1-4314-9a3c-bc11c3302ab8");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setStatus("success");
    } else {
      setError(data);
      setStatus("idle");
    }
  };

  if (status === 'success') {
    toast({
      title: "Your message has been sent!",
      position: "top-right",
      status: "success",
      isClosable: true,
    });
    setStatus("idle")
  }

  if (error) {
    toast({
      title: "There was an error processing your request",
      position: "top-right",
      status: "error",
      isClosable: true,
    });
    setError(null);
  }


  return (
    <Formik
      initialValues={{ name: "", email: "", msg: "" }}
      onSubmit={(values, actions) => {
        insertData(values);
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
              <Button colorScheme="primary" type="submit" isLoading={isLoading}>
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
