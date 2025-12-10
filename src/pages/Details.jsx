import { Box, Container, Stack, Text, Image, Flex, Button, Heading, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { jetsData } from '../jetsData';

export default function Details() {
  const { id } = useParams();
  
  // On cherche le jet qui correspond à cet ID
  const jet = jetsData.find((item) => item.id === id);

  // Sécurité si l'ID n'existe pas
  if (!jet) {
    return (
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mt={6} mb={2}>Jet Introuvable</Heading>
          <Text color={'gray.500'}>Le jet que vous cherchez n'existe pas.</Text>
          <Button as={RouterLink} to="/catalog" mt={4} colorScheme="yellow">
            Retour au catalogue
          </Button>
        </Box>
    );
  }

  return (
    <Container maxW={'7xl'} py={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        
        {/* Colonne Gauche : Image */}
        <Flex>
          <Image
            rounded={'md'}
            alt={jet.name}
            src={jet.image}
            objectFit={'cover'}
            w={'100%'}
            h={{ base: '300px', sm: '400px', lg: '500px' }}
            shadow={'2xl'}
          />
        </Flex>

        {/* Colonne Droite : Infos */}
        <Stack spacing={6}>
          <Box>
            <Text
              textTransform={'uppercase'}
              color={'yellow.500'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              LUXURY JETS
            </Text>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {jet.name}
            </Heading>
            <Text color={'gray.900'} fontWeight={300} fontSize={'2xl'}>
              {jet.price}
            </Text>
          </Box>

          <Text color={'gray.500'} fontSize={'lg'}>
            {jet.description}
          </Text>

          {/* Caractéristiques techniques */}
          <Box borderTop="1px solid" borderColor="gray.200" pt={5}>
            <SimpleGrid columns={3} spacing={5}>
                <Stat>
                    <StatLabel color="gray.500" fontWeight="bold">Vitesse</StatLabel>
                    <StatNumber fontSize="xl">{jet.speed}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel color="gray.500" fontWeight="bold">Rayon</StatLabel>
                    <StatNumber fontSize="xl">{jet.range}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel color="gray.500" fontWeight="bold">Passagers</StatLabel>
                    <StatNumber fontSize="xl">{jet.passengers}</StatNumber>
                </Stat>
            </SimpleGrid>
          </Box>

          <Stack direction="row" spacing={4} pt={4}>
            <Button
              as={RouterLink}
              to="/catalog"
              variant="outline"
              width="50%"
            >
              Retour
            </Button>
            <Button
              colorScheme="yellow"
              width="50%"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              Réserver ce vol
            </Button>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}