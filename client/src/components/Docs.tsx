import React from 'react';
import {
  Box, Heading, Text, List, ListItem, Code, Divider, useColorModeValue, Link,
} from '@chakra-ui/react';

const Docs: React.FC = () => {
  // Colors for code blocks
  const codeBg = useColorModeValue('gray.900', 'gray.900');
  const codeText = useColorModeValue('purple.700', 'purple.300');
  const codeBorder = useColorModeValue('gray.300', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <Box maxW="1000px" mx="auto" p={6}>
      <Heading 
        as="h1" 
        size="2xl" 
        mb={8} 
        textAlign="center" 
        bgGradient="linear(to-r, cyan.400, blue.500)" 
        bgClip="text"
      >
        Documentation
      </Heading>

      <Heading as="h2" size="lg" mb={6} textAlign="center" color={textColor}>
        Table of Contents
      </Heading>
      <List spacing={3} mb={8} color={textColor}>
        <ListItem>⚙️ <strong>Tech Stack:</strong> Python, React, SQLite, SQLAlchemy, Flask, Chakra UI</ListItem>
        <ListItem>✅ <strong>CRUD Functionality:</strong> Seamlessly create, read, update, and delete friends from your store.</ListItem>
        <ListItem>🔒 <strong>Best Practices:</strong> Virtual environments (venv) for isolated development.</ListItem>
        <ListItem>🌐 <strong>Deployment:</strong> Deployed on Render for free.</ListItem>
        <ListItem>🎨 <strong>Stylish UI Components:</strong> Stylish UI with Chakra UI.</ListItem>
        <ListItem>🌓 <strong>Light and Dark Mode:</strong> Light and dark modes for a personalized UI.</ListItem>
        <ListItem>📱 <strong>Responsive Design:</strong> Consistent experience across devices.</ListItem>
      </List>

      <Divider my={8} />

      <Heading as="h2" size="lg" mb={6} textAlign="center" color={textColor}>
        Run the App Locally
      </Heading>

      <Text mb={4} color={textColor}>Follow these steps to set up and run the FriendsTracker app on your local machine:</Text>

      <Heading as="h3" size="md" mb={3} color={textColor}>Clone the repository:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        git clone https://github.com/ANAS727189/BuddyBoard
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Navigate to the project directory:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        cd BuddyBoard
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Navigate to the backend directory:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        cd backend
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Create a virtual environment:</Heading>
      <Text mb={2} color={textColor}>On macOS and Linux:</Text>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        python3 -m venv venv
      </Code>

      <Text mb={2} color={textColor}>On Windows:</Text>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        python -m venv venv
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Activate the virtual environment:</Heading>
      <Text mb={2} color={textColor}>On macOS and Linux:</Text>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        source venv/bin/activate
      </Code>

      <Text mb={2} color={textColor}>On Windows:</Text>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        venv\Scripts\activate
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Install the dependencies:</Heading>
      <Text mb={2} color={textColor}>On macOS and Linux:</Text>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        pip3 install -r requirements.txt
      </Code>

      <Text mb={2} color={textColor}>On Windows:</Text>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        pip install -r requirements.txt
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Navigate to the frontend directory:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        cd ../client
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Install the dependencies:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        npm install
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Build the frontend:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        npm run build
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Navigate to the backend directory:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        cd ../backend
      </Code>

      <Heading as="h3" size="md" mt={6} mb={3} color={textColor}>Run the Flask app:</Heading>
      <Code p={4} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder} display="block" whiteSpace="pre-wrap">
        flask run
      </Code>

      <Text mt={6} mb={4} color={textColor}>
        Open your browser and go to{' '}
        <Code p={2} rounded="md" bg={codeBg} color={codeText} borderWidth="1px" borderColor={codeBorder}>
          http://localhost:5000/
        </Code>{' '}
        to view the app.
      </Text>

      <Link href="http://localhost:5000/" color="teal.500" isExternal>
        Go to App
      </Link>
    </Box>
  );
};

export default Docs;
