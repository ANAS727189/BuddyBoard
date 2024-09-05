import { useState } from 'react';
import { Stack, Container, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom'; // Removed BrowserRouter import
import Navbar from './components/Navbar';
import Users from './components/Users';
import Docs from './components/Docs'; 
import Contact from './components/Contact'; 

export type User = {
  id: number;
  name: string;
  role: string;
  description: string;
  imgUrl: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />
      <Container maxW={"1200px"} my={4}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Text
                  fontSize={{ base: "3xl", md: "50px" }}
                  fontWeight={"bold"}
                  letterSpacing={1}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  mb={8}
                >
                  <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
                     Dashboard
                  </Text>
                </Text>
                <Users users={users} setUsers={setUsers} />
              </>
            }
          />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Stack>
  );
}

export default App;
