import { useState } from "react";
import { Box, Container, VStack, Text, Flex, Spacer, IconButton, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaUser } from "react-icons/fa";

const WorkoutLog = () => {
  const [workout, setWorkout] = useState({
    exercise: "",
    duration: "",
    calories: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({
      ...workout,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Workout logged:", workout);
    // Add logic to save the workout data
  };

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
            <Heading size="md" mb={2}>Log Your Workout</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="exercise" mb={4}>
                <FormLabel>Exercise Type</FormLabel>
                <Input type="text" name="exercise" value={workout.exercise} onChange={handleChange} required />
              </FormControl>
              <FormControl id="duration" mb={4}>
                <FormLabel>Duration (minutes)</FormLabel>
                <Input type="number" name="duration" value={workout.duration} onChange={handleChange} required />
              </FormControl>
              <FormControl id="calories" mb={4}>
                <FormLabel>Calories Burned</FormLabel>
                <Input type="number" name="calories" value={workout.calories} onChange={handleChange} required />
              </FormControl>
              <Button type="submit" colorScheme="blue">Log Workout</Button>
            </form>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default WorkoutLog;