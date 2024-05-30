import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface Player {
  address: string;
  amount: number;
}

interface PlayersListProps {
  players: Player[];
}

const PlayersList: React.FC<PlayersListProps> = ({ players }) => {
  return (
    <Flex
      direction="column"
      height="100vh"
      width="400px"
      alignItems="center"
      justifyContent="flex-start"
      p={4}
      bg="gray.50"
      overflowY="auto"
    >
       <Box alignSelf="flex-start" width="90%" mb={2} pl={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="left" ml={2}>
          {players.length} Players
        </Text>
      </Box>
      {players.map((player, index) => (
        <Box
          key={index}
          p={4}
          m={2}
          width="90%"
          borderWidth="1px"
          borderRadius="lg"
          height="fit-content"
          overflow="hidden"
          bg="white"
          shadow="md"
        >
          <Text fontSize="lg" fontWeight="bold">
            Address: {player.address}
          </Text>
          <Text fontSize="md" color="gray.500">
            Amount: {player.amount}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PlayersList;
