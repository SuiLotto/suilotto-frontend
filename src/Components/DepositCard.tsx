import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';

const DepositCard: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const account = useCurrentAccount()
  const address = account?.address;
	const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleDeposit = () => {
    console.log('Depositing', amount);
    const tx = new Transaction();
    const [coin] = tx.splitCoins(tx.gas, [amount * 10 ** 9]);
    console.log(coin);
    tx.transferObjects(
      [coin],
      '0x5b288bfe162260c34d9a00ea414019730b685bb106a44192dc7fdaff28dec450'
    );

    signAndExecuteTransaction(
      {
        transaction: tx,
      },
      {
        onSuccess: (result) => {
          toast({
            title: 'Success',
            description: 'Sent transaction with digest:'+ result.digest,
            position: 'top-right',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });      
        },
      },
    );
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
          onChange={handleInputChange}
        />
        <Text>Address: {address && `${address.slice(0, 6)}...${address.slice(-4)}`}</Text>
        <Button colorScheme="blue" onClick={() => handleDeposit()}>
          Deposit
        </Button>
      </VStack>
    </Box>
  );
};

export default DepositCard;
