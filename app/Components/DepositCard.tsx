import React, { use, useEffect, useState } from 'react';
import { Box, Button, Input, Text, VStack, HStack } from '@chakra-ui/react';
import { useAccounts } from '@mysten/dapp-kit';

const DepositCard: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const address = useAccounts()[0];
  console.log(address);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleDeposit = () => {
    return; //Send transaction on Sui
  };
  
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxW="sm"
      mx="auto"
    >
      <VStack spacing={4}>
        <Input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleInputChange}
        />
        <Text>Balance: 100</Text>
        <Button colorScheme="blue" onClick={handleDeposit}>
          Deposit
        </Button>
      </VStack>
    </Box>
  );
};

export default DepositCard;
