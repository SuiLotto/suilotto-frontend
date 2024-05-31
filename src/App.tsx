"use client";
import { Flex, Box, Text, VStack, HStack } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import PlayersList from "./Components/PlayerList";
import DepositCard from "./Components/DepositCard";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <>
      <Navbar /> {/* Use the 'Navbar' component */}
      <HStack width={"100%"} height={"100%"}>
        <PlayersList
          players={[
            { address: "0x1234", amount: 100 },
            { address: "0x2345", amount: 200 },
            { address: "0x1234", amount: 100 },
            { address: "0x2345", amount: 200 },
            { address: "0x1234", amount: 100 },
            { address: "0x2345", amount: 200 },
          ]}
        />
        <GameBoard
          players={[
            { address: "0x1234", amount: 100 },
            { address: "0x2345", amount: 200 },
            { address: "0x1234", amount: 100 },
            { address: "0x2345", amount: 200 },
            { address: "0x1234", amount: 100 },
            { address: "0x2345", amount: 200 },
          ]}
        />
        <DepositCard />
      </HStack>
    </>
  );
}

export default App;
