import React from 'react';
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, IconButton, useToast } from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';
import EditModal from './EditModal';

type User = {
  id: number;
  name: string;
  role: string;
  description: string;
  imgUrl: string;
};

type UsersProps = {
  user: User;  
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UserCard = ({ user, setUsers }: UsersProps) => {
  const toast = useToast();

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/friends/${user.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));

      toast({
        status: 'success',
        title: 'User deleted successfully',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (err) {
      toast({
        status: 'error',
        title: 'Oops! User not deleted',
        description: 'User not deleted',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <Flex>
          <Flex flex="1" gap={4} alignItems="center">
            <Avatar src={user.imgUrl} />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal setUsers={setUsers} user={user} />

            <IconButton
              variant="ghost"
              colorScheme="red"
              size="sm"
              aria-label="Delete User"
              icon={<BiTrash size={20} />}
              onClick={handleDeleteUser}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{user.description}</Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;
