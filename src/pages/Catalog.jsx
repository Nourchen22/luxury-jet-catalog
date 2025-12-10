import { useState, useEffect } from 'react';
import { Box, SimpleGrid, Image, Heading, Text, Button, Stack, Badge, Center, Spinner } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; // Import des fonctions Firebase
import { db } from '../firebase-config'; // Import de ta config

export default function Catalog() {
  const [jets, setJets] = useState([]); // Stocke les avions
  const [loading, setLoading] = useState(true); // Gère le chargement

  // --- C'est ici qu'on utilise ASYNC / AWAIT ---
  useEffect(() => {
    const getJets = async () => {
      try {
        const jetsCollection = collection(db, "jets");
        const data = await getDocs(jetsCollection);
        // On transforme les données reçues pour qu'elles soient lisibles
        setJets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Erreur de connexion:", error);
      } finally {
        setLoading(false); // On arrête le chargement
      }
    };

    getJets();
  }, []);
  // ---------------------------------------------

  // Si ça charge, on affiche une roue qui tourne
  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="yellow.500" />
      </Center>
    );
  }

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <Heading textAlign="center" mb={10} color="gray.800">
        Notre Collection Exclusive (Firebase)
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {jets.map((jet) => (
          <Box 
            key={jet.id} 
            maxW="sm" 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            bg="white" 
            boxShadow="lg"
            _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
          >
            <Image src={jet.image} alt={jet.name} h="250px" w="100%" objectFit="cover" />

            <Box p={6}>
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="yellow">
                  VIP
                </Badge>
              </Box>

              <Heading mt="1" fontWeight="bold" as="h3" size="md" isTruncated>
                {jet.name}
              </Heading>

              <Text mt={2} color="gray.600" fontSize="sm" noOfLines={2}>
                {jet.description}
              </Text>

              <Text mt={4} fontWeight="bold" fontSize="xl" color="yellow.600">
                {jet.price}
              </Text>

              <Stack mt={6} direction="row" spacing={4} align="center">
                <Button 
                  as={RouterLink} 
                  to={`/jet/${jet.id}`} 
                  colorScheme="blackAlpha" 
                  bg="gray.900" 
                  color="white"
                  width="full"
                  _hover={{ bg: "yellow.500" }}
                >
                  Voir les détails
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}