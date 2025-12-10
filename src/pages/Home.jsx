import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Box 
      w="100%" 
      h="85vh" 
      bgImage="url('https://images.unsplash.com/photo-1540962351504-03099e0a7782?q=80&w=2000&auto=format&fit=crop')" 
      bgPosition="center" 
      bgSize="cover"
      position="relative"
    >
      {/* Filtre sombre pour la lisibilité */}
      <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="blackAlpha.600" />

      {/* Contenu principal */}
      <VStack 
        position="relative" 
        h="100%" 
        justify="center" 
        color="white" 
        spacing={6} 
        textAlign="center" 
        px={4}
      >
        <Heading size="3xl" fontWeight="bold" color="yellow.400" textTransform="uppercase">
          L'Excellence sans compromis
        </Heading>
        
        <Text fontSize="xl" maxW="2xl">
          Redéfinissez votre façon de voyager. Confort absolu, confidentialité et rapidité.
          Bienvenue à bord.
        </Text>

        <Button 
          as={RouterLink} 
          to="/catalog" 
          size="lg" 
          colorScheme="yellow" 
          px={10} 
          fontSize="lg"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
        >
          Découvrir notre flotte
        </Button>
      </VStack>
    </Box>
  );
}