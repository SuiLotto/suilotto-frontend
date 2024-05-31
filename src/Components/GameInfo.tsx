// components/GameInfo.tsx
import { Box, Text, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const fade = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const GameInfo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="200px"
      h="200px"
      bg="teal.500"
      color="white"
      borderRadius="md"
      fontSize="3xl"
      fontWeight="bold"
      animation={`${fade} 1s infinite`}
      key={timeLeft}
      _hover={{ bg: "teal.600" }}
    >
      <Text>{formatTime(timeLeft)}</Text>
    </Box>
  );
};

export default GameInfo;
