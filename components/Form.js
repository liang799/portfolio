import {
  useToast,
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
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Submission from "./Submission.js";
import { supabase } from "../utils/supabaseClient";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [isError, setError] = useState(false);

  // if (isSubmit && !loading) {
  //   return <Submission />;
  // }

  function validateName(value) {
    let error;
    if (!value.trim()) {
      error = "Name is required";
    }
    return error;
  }

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  function validateEmail(value) {
    let error;
    if (!value.trim()) {
      error = "Email is required";
    } else if (!value.match(re)) {
      error = "Please enter a valid email";
    }
    return error;
  }

  function validateMsg(value) {
    let error;
    if (!value.trim()) {
      error = "Message cannot be empty";
    }
    return error;
  }

  const insertData = async (values) => {
    const { data, error } = await supabase.from("contact").insert(values);
    console.log(data);
    console.log(error);
    if (error === null)
      setError(true);
    setLoading(false);
  };

  const toast = useToast();

  return (
    <Formik
      initialValues={{ name: "", email: "", msg: "" }}
      onSubmit={(values, actions) => {
        setLoading(true);
        insertData(values);
        setSubmit(({ isSubmit }) => ({ isSubmit: !isSubmit }));
        if (!isError) {
          toast({
            title: "Your message has been sent!",
            position: "top-right",
            status: "success",
            isClosable: true,
          });
        } else {
          toast({
            title: "There was an error processing your request",
            position: "top-right",
            status: "error",
            isClosable: true,
          });
          setError(false);
        }
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
              <Button colorScheme="primary" type="submit" isLoading={loading}>
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
