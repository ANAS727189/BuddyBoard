import React, { useState, useEffect } from 'react';
import { Grid, Flex, Spinner, Text } from '@chakra-ui/react';
import UserCard from './UserCard';
import { BASE_URL } from '../App';

type User = {
  id: number;
  name: string;
  role: string;
  description: string;
  imgUrl: string;
};

type UsersProps = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const Users = ({ users, setUsers }: UsersProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(BASE_URL + "/friends");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Something went wrong!');
        }

        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={4}
      >
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </Grid>

      {isLoading && (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      )}

      {!isLoading && users.length === 0 && (
        <Flex justifyContent="center">
          <Text fontSize="xl">
            <Text as="span" fontSize="2xl" fontWeight="bold" mr={2}>
              I feel for you! 🥺
            </Text>
            There are no friends to show!
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Users;
