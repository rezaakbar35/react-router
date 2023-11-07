import {
  Button,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <Flex
      w="100%"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="white"
      borderBottom="1px"
      borderColor="#C4C4C4"
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      style={{ margin: '0' }}
    >
      <div>
      <Link to="/">
        <div>
        <Flex align="center" mr={5} cursor="pointer">
          <Text fontSize="3xl" fontWeight="bold" color="#A2D2FF">
            Goodreads.
          </Text>
        </Flex>
        </div>
      </Link>
      </div>
      <HStack >
        {isLogin && (
          <Link to="/newbook">
            <Button bg="#A2D2FF" color="white" _hover={{ bg: '#3E5F9C' }} _active={{ border:'0px' }}borderRadius={25} px={10}>Create New Book</Button>
          </Link>
        )}
        {!isLogin ? (
          <Link to='/login'>
          <Button onClick={onclick} color="white" bg="#A2D2FF" borderRadius={50} px={8} my={1} _hover={{ bg: '#3E5F9C', borderColor: 'white' }} _active={{ border:'0px' }}>
            Login
          </Button>
          </Link>
        ) : (
          <Button
          bg="#EF476F" borderRadius={50} color="white" px={8} my={10} _hover={{ bg: '#D41240', borderColor: 'white'}} _active={{ border:'0px' }} 
            onClick={() => {
              window.localStorage.removeItem("token");
              setIsLogin(false);
              navigate("/")
            }}
          >
            Logout
          </Button>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
