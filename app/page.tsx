'use client';
import { Flex,Box,Text, VStack, HStack } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import PlayersList from "./Components/PlayerList";
import DepositCard from "./Components/DepositCard";

const HomePage: React.FC = () => {
    return (
        <>
        <Navbar />
        <HStack width={'100%'} height={'100%'}>
            <PlayersList players={[{ address: '0x1234', amount: 100 }, { address: '0x2345', amount: 200 }]} />
            <DepositCard />
        </HStack>
        </>
    );
};

export default function Home() {
    return (
        <main>
            <HomePage />
        </main>
    );
}