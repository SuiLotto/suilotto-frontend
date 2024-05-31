import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { bcs } from '@mysten/sui/bcs';

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
    const tx = new Transaction();
    const [coin] = tx.splitCoins(tx.gas, [amount * 10 ** 9]);
    console.log("COIN:",coin);
    tx.setGasBudget(10000000);
    if (address) tx.setGasOwner(address);
    tx.moveCall({
      arguments: [
          coin,
          tx.pure.address(
            "0xdd33a477f538c6effdc957653a91288d892c86ebe0180f109f0ee65eaa301298"
          )
      ],
      target:
        "0x15c0aac14bab6169abc40064ff1b412f3f340a68526367c94d1fee6e6751d1ec::sui_lotto::participate_lotto",
    });

    // tx.transferObjects(
    //   [coin],
    //   '0x5b288bfe162260c34d9a00ea414019730b685bb106a44192dc7fdaff28dec450'
    // );

    signAndExecuteTransaction(
      {
        transaction: tx,
        chain: "sui:testnet",
      },
      {
        onSuccess: (result) => {
          console.log('success', result);
          toast({
            title: 'Success',
            description: 'Sent transaction with digest:'+ result.digest,
            position: 'top-right',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });      
        },
        onSettled: (result) => {
          console.log('settled', result);
        },
        onError: (error) => {
          console.log('error', error);
          toast({
            title: 'Error',
            description: 'Failed to send transaction',
            position: 'top-right',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
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
