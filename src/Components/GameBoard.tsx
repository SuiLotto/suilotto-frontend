import React, { useState, useEffect } from "react";
import { Box, Flex, HStack, Text, Image } from "@chakra-ui/react";

interface Player {
  address: string;
  amount: number;
}

interface PlayersListProps {
  players: Player[];
}

const GameBoard: React.FC<PlayersListProps> = ({ players }) => {
  const [winner, setWinner] = useState<Player | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameState, setGameState] = useState<"waiting" | "ongoing" | "drawing">(
    "waiting",
  );
  const [pointerIndex, setPointerIndex] = useState(0);
  const totalAmount = players.reduce(
    (total, player) => total + player.amount,
    0,
  );

  const colors = [
    "yellow.200",
    "blue.200",
    "green.200",
    "red.200",
    "purple.200",
  ];

  useEffect(() => {
    if (players.length && gameState === "waiting") {
      startGame();
    } else if (gameState === "ongoing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === "ongoing" && timeLeft === 0) {
      startDrawing();
    }
  }, [timeLeft, gameState, players.length]);

  const startDrawing = () => {
    setGameState("drawing");
    fetchWinner();

    let index = 0;
    const interval = setInterval(() => {
      setPointerIndex(index);
      index = (index + 1) % players.length;
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setGameState("waiting");
    }, 5000);
  };

  const fetchWinner = () => {
    fetch("contract-id")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setWinner(data.winner))
      .catch((error) => {
        console.error("Fetch winner error:", error);
      });
  };

  const startGame = () => {
    setWinner(null);
    setGameState("ongoing");
    setTimeLeft(20);
  };

  let displayMessage;
  if (players.length === 0) {
    displayMessage = "Deposit to play game";
  } else if (gameState === "ongoing") {
    displayMessage = `Game is ongoing. Time left: ${timeLeft}s`;
  } else if (gameState === "drawing") {
    displayMessage = "Drawing the winner...";
  } else if (winner) {
    displayMessage = `Winner is ${winner.address}`;
  }

  return (
    <Flex
      direction="column"
      height="100vh"
      width="600px"
      alignItems="center"
      justifyContent="flex-start"
      p={4}
      bg="gray.50"
      overflowY="auto"
    >
      <Box alignSelf="flex-start" width="90%" mb={2} pl={4}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          textAlign="left"
          ml={2}
          color={"gray.500"}
        >
          {displayMessage}
        </Text>
      </Box>
      {players.length > 0 &&
        players.map((player, index) => {
          const percentage = (player.amount / totalAmount) * 100;
          return (
            <Box
              key={index}
              p={2}
              m={2}
              width="90%"
              borderWidth="1px"
              borderRadius="lg"
              height="fit-content"
              overflow="hidden"
              bg={colors[index % colors.length]}
              shadow="md"
            >
              <HStack
                width="100%"
                height="100%"
                p={4}
                spacing={4}
                justifyContent="space-between"
              >
                <Text fontSize="lg" fontWeight="bold" color={"gray.500"}>
                  {player.address &&
                    `${player.address.slice(0, 6)}...${player.address.slice(-4)}`}
                </Text>
                <HStack>
                  <Text fontSize="md" color="gray.500">
                    {percentage.toFixed(2)}%
                  </Text>
                  {pointerIndex === index && (
                    <Image src="flames-icon.png" alt="flames" boxSize="20px" />
                  )}
                </HStack>
              </HStack>
            </Box>
          );
        })}
    </Flex>
  );
};

export default GameBoard;
