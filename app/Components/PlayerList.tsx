import React from 'react';
import { Box, Flex, HStack, Text, Image } from '@chakra-ui/react';

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
          <HStack width="100%" height="100%" p={4} spacing={4} justifyContent="space-between">
          <Text fontSize="lg" fontWeight="bold">
          {player.address && `${player.address.slice(0, 6)}...${player.address.slice(-4)}`}
          </Text>
          <HStack>
          <Text fontSize="md" color="gray.500">
            {player.amount} 
          </Text>
          <Image src="sui-sui-logo.png" alt="Logo" boxSize="20px" />
          </HStack>
          </HStack>
        </Box>
      ))}
    </Flex>
  );
};

export default PlayersList;
