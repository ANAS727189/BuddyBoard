import React from 'react';
import { Box, Container, Flex, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoMoon } from 'react-icons/io5';
import CreateUserModel from './CreateUserModel';
import {Link} from 'react-router-dom';


export type User = {
  id: number;
  name: string;
  role: string;
  description: string;
  imgUrl: string;
};

type NavbarProps = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const Navbar = ({ setUsers }: NavbarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkColor = useColorModeValue('gray.600', 'gray.300');
  const linkHoverColor = useColorModeValue('gray.900', 'white');
  const bgColor = useColorModeValue('gray.200', 'gray.600');
  const buttonBg = useColorModeValue('gray.400', 'gray.600');

  return (
    <Container maxW="900px">
      <Box 
        px={5} 
        my={4} 
        borderRadius="full"
        bg={bgColor}
        shadow="md"
      >
        <Flex h="16" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap={6} display={{ base: 'none', md: 'flex' }}>
            <Text
              as={Link}
              to="/"
              fontWeight="medium"
              color={linkColor}
              position="relative"
              _hover={{
                color: linkHoverColor,
                _before: {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  bgGradient: 'linear(to-r, cyan.400, blue.500)',
                  transition: 'width 0.3s ease-in-out',
                },
              }}
              _before={{
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                left: '0',
                bgGradient: 'linear(to-r, cyan.400, blue.500)',
                transition: 'width 0.3s ease-in-out',
              }}
            >
              Home
            </Text>
            <Text
              as={Link}
              to ="/docs"
              fontWeight="medium"
              color={linkColor}
              position="relative"
              _hover={{
                color: linkHoverColor,
                _before: {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  bgGradient: 'linear(to-r, cyan.400, blue.500)',
                  transition: 'width 0.3s ease-in-out',
                },
              }}
              _before={{
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                left: '0',
                bgGradient: 'linear(to-r, cyan.400, blue.500)',
                transition: 'width 0.3s ease-in-out',
              }}
            >
              Docs
            </Text>
            <Text
              as={Link}
              to ="/contact"
              fontWeight="medium"
              color={linkColor}
              position="relative"
              _hover={{
                color: linkHoverColor,
                _before: {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  bgGradient: 'linear(to-r, cyan.400, blue.500)',
                  transition: 'width 0.3s ease-in-out',
                },
              }}
              _before={{
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                left: '0',
                bgGradient: 'linear(to-r, cyan.400, blue.500)',
                transition: 'width 0.3s ease-in-out',
              }}
            >
              Contact me
            </Text>
          </Flex>

          <Flex gap={4} alignItems="center">
            <Text 
            fontSize="xl" 
            fontWeight="bold" 
            display={{ base: 'none', md: 'block' }}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            >
              BuddyBoard 
            </Text>
            🫂
            <Button 
              onClick={toggleColorMode} 
              bg={buttonBg} 
              color="white" 
              _hover={{ bg: useColorModeValue('gray.400', 'gray.500') }}
            >
              {colorMode === 'light' ? <IoMoon /> : '☀️'}
            </Button>
            <CreateUserModel setUsers={setUsers} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
