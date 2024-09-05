import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { BiEditAlt } from 'react-icons/bi';
import { BASE_URL } from '../App';

type User = {
  id: number;
  name: string;
  role: string;
  description: string;
  imgUrl: string;
};

type EditModalProps = {
  user: User;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const EditModal = ({ setUsers, user }: EditModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: user.name,
    role: user.role,
    description: user.description,
  });

  const toast = useToast();

  const handleEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends/" + user.id,  {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? data : u)));
      toast({
        status: "success",
        title: "Yayy! 🎉",
        description: "Friend updated successfully.",
        duration: 2000,
        position: "top-right",
      });
      onClose();
    } catch (error) {
      toast({
        status: "error",
        title: "An error occurred.",
        description: "Unable to update friend.",
        duration: 4000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        colorScheme="blue"
        aria-label="Edit User"
        size="sm"
        icon={<BiEditAlt size={20} />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleEditUser}>
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems="center" gap={4}>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setInputs((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setInputs((prev) => ({ ...prev, role: e.target.value }))
                    }
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize="none"
                  placeholder="He's a software engineer who loves to code and build things."
                  value={inputs.description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInputs((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={isLoading}
              >
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
