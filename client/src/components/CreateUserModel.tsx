import React, { useState } from 'react';
import {
  Button, useDisclosure,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Flex, FormControl, FormLabel, Textarea, RadioGroup, Radio, useToast
} from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';
import { BASE_URL } from '../App';

export type User = {
  id: number;
  name: string;
  role: string;
  description: string;
  imgUrl: string;
};

type CreateUserModelProps = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const CreateUserModel = ({ setUsers }: CreateUserModelProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });
  const toast = useToast();

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

      toast({
        status: 'success',
        title: "Yay!  🎉 ",
        duration: 2000,
        isClosable: true,
        description: "Friend added successfully",
        position: "top-right"
      });
      onClose();
      setUsers((prevUsers) => [...prevUsers, data]);
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    } catch (err) {
      toast({
        status: 'error',
        title: "Oops! User not added",
        duration: 4000,
        isClosable: true,
        description: "User not created successfully",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader>Add new Friend</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>

                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder="Monkey D. Luffy"
                    value={inputs.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, name: e.target.value })}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    placeholder="Full Stack Developer"
                    value={inputs.role}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, role: e.target.value })}
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflowY={"hidden"}
                  placeholder="He is a team man, a young introvert boy hoping to do something big in society."
                  value={inputs.description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputs({ ...inputs, description: e.target.value })}
                />
              </FormControl>

              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio
                    value="male"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, gender: e.target.value })}
                  > Male</Radio>
                  <Radio
                    value="female"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, gender: e.target.value })}
                  >Female</Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} type='submit' isLoading={isLoading}>Add</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>

          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default CreateUserModel;
