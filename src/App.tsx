'use client';
import { Flex,Box,Text, VStack, HStack } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import PlayersList from "./Components/PlayerList";
import DepositCard from "./Components/DepositCard";
import GameInfo from "./Components/GameInfo";

function App() {
  return (
    <>
        <Navbar /> {/* Use the 'Navbar' component */}
        <HStack width={'100%'} height={'100%'}>
            <PlayersList players={[{ address: '0x1234', amount: 100 }, { address: '0x2345', amount: 200 }]} />
            <DepositCard />
            <GameInfo />
        </HStack>
        </>
  );
}

export default App;
