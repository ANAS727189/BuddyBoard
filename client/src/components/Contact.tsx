import React from 'react';
import {
  Box, Heading, Text, Input, Textarea, Button, useColorModeValue, FormControl, FormLabel,
} from '@chakra-ui/react';

const Contact: React.FC = () => {
  const inputBg = useColorModeValue('gray.100', 'gray.700');
  const buttonTextColor = useColorModeValue('white', 'black');

  return (
    <Box maxW="800px" mx="auto" p={6}>
      <Heading 
        as="h1" 
        size="2xl" 
        mb={8} 
        textAlign="center" 
        bgGradient="linear(to-r, cyan.400, blue.500)" 
        bgClip="text"
      >
        Contact Us
      </Heading>

      <Text mb={6} fontSize="lg" textAlign="center"  color="gray.100">
        Have any questions or feedback? Fill out the form below, and we’ll get back to you shortly.
      </Text>

      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input bg={inputBg} placeholder="Your name" />
      </FormControl>

      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" bg={inputBg} placeholder="Your email address" />
      </FormControl>

      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea bg={inputBg} placeholder="Your message" />
      </FormControl>

      <Button
        bgGradient="linear(to-r, cyan.400, blue.500)"
        color={buttonTextColor}
        _hover={{ bgGradient: 'linear(to-r, cyan.500, blue.600)' }}
        size="lg"
        mt={4}
        w="full"
      >
        Send Message
      </Button>
    </Box>
  );
};

export default Contact;
