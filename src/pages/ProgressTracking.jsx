import { useState, useEffect } from "react";
import { Box, Container, VStack, Text, Flex, Spacer, IconButton, Heading } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaUser } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const ProgressTracking = () => {
  const [progressData, setProgressData] = useState({
    labels: [],
    datasets: [
      {
        label: "Calories Burned",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  });

  useEffect(() => {
    // Fetch progress data from an API or local storage
    const fetchData = async () => {
      // Placeholder data
      const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Calories Burned",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
          },
        ],
      };
      setProgressData(data);
    };

    fetchData();
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">Fitness Tracker</Heading>
        <Spacer />
        <Link to="/">
          <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        </Link>
        <Link to="/workout-log">
          <IconButton aria-label="Dashboard" icon={<FaChartLine />} variant="ghost" color="white" />
        </Link>
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" color="white" />
      </Flex>
      <Box bg="gray.100" minH="calc(100vh - 64px)" p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>Your Progress</Heading>
            <Text>Track your fitness progress over time.</Text>
            <Line data={progressData} />
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default ProgressTracking;