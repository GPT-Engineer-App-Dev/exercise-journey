import { Box, Container, VStack, Text, Flex, Spacer, IconButton, Heading, Button } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">Fitness Tracker</Heading>
        <Spacer />
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        <IconButton aria-label="Dashboard" icon={<FaChartLine />} variant="ghost" color="white" />
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" color="white" />
      </Flex>
      <Box bg="gray.100" minH="calc(100vh - 64px)" p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Dashboard</Heading>
            <Text>Track your fitness metrics here.</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>User Input</Heading>
            <Text>Placeholder for user input forms.</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Data Visualization</Heading>
            <Text>Placeholder for charts and graphs.</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Workout Logging</Heading>
            <Link to="/workout-log">
              <Button colorScheme="blue">Log a Workout</Button>
            </Link>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;