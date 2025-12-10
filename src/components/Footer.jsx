import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.500" py={8} textAlign="center" mt="auto">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Luxury Jet Catalog. L'excellence en plein ciel.
      </Text>
    </Box>
  );
}