import { Flex, Heading, Spacer, HStack, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex as="nav" p={4} bg="gray.900" color="white" align="center">
      {/* Logo */}
      <Heading size="md" color="yellow.400" letterSpacing="widest">
        LUXURY JETS
      </Heading>
      
      <Spacer />
      
      {/* Liens de navigation */}
      <HStack spacing={8}>
        <Button as={RouterLink} to="/" variant="ghost" colorScheme="whiteAlpha" _hover={{ color: "yellow.400" }}>
          Accueil
        </Button>
        <Button as={RouterLink} to="/catalog" variant="ghost" colorScheme="whiteAlpha" _hover={{ color: "yellow.400" }}>
          Catalogue
        </Button>
      </HStack>
    </Flex>
  );
}