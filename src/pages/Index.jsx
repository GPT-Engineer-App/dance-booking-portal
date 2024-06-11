import { Container, Text, VStack, Button, Heading, Image } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Book a Dancer for Your Stage
        </Heading>
        <Image src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYW5jZXIlMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcxODEzMzgyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dancer on stage" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Elevate your event with professional dancers. Choose from a variety of styles and performers to make your event unforgettable.
        </Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaCalendarAlt />}>
          Pick your time to dance
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
