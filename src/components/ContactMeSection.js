import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values) => {
      try {
        await submit("/api/contact", values);
        if (response && response.type === "success") {
          onOpen("success", response.message);
          formik.resetForm();
          setIsSubmitted(true);
        } else if (response && response.type === "error") {
          onOpen("error", response.message);
        }
      } catch (error) {
        onOpen("error", "Something went wrong, please try again later!");
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string().min(50, 'Comment must be at least 50 characters').required('Comment is required')
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            {isSubmitted && (
              <Alert status="success" mb={4}>
                <AlertIcon />
                Form submitted successfully!
              </Alert>
            )}
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps('type')}
                  color="white" // Sets the color of the selected option
                  bg="#512DA8" // Sets the background color of the dropdown
                >
                  <option value="hireMe" style={{ color: 'black' }}>
                    Front-end development
                  </option>
                  <option value="openSource" style={{ color: 'black' }}>
                    Content Writing
                  </option>
                  <option value="other" style={{ color: 'black' }}>
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;