import React, { useState } from 'react';
import { Button, FormControl, FormLabel, HStack, Input, Text, VStack, useToast, Image, Spacer } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../modules/fetch';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      window.localStorage.setItem('token', token.token);
      navigate('/');
    } catch (err) {
        toast({
            title: "Error",
            description: err.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
    }
  };

  return (
    
    <HStack justifyContent="start">
        <Image
        src="./src/assets/login_bg.png"
        height="100vh"
        style={{left: 0,top: 0, position: 'relative'}}
        />
      <VStack spacing={4} mt={4} px={20}>
      <Text 
      fontSize="3xl" 
      fontWeight="bold" 
      color="black"
      pb={20}
      px={10}
      align="center"
      style={{wordWrap: 'break-word'}}>
      Easiest way to arrange your reads in needs.
      </Text>
        <FormControl isRequired pb={10} px={10} w="20vw">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg="white"
          />
        </FormControl>
        <FormControl isRequired pb={10} px={10} w="20vw">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg="white"
          />
        </FormControl>
        <Button onClick={handleLogin} color="white" fontWeight="bold" bg="#A2D2FF" borderRadius={50} px={8} my={1} _hover={{ bg: '#3E5F9C' }} _active={{ border:'0px' }}>
          Login
        </Button>
        <Text pt={8}>
        Don't have an account? 
        </Text>
        <Link to="/register">Click here to register</Link>
      </VStack>
    </HStack>
    
  );
};

export default LoginPage;
