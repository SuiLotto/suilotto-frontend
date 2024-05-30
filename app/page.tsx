'use client';
import { Flex,Box,Text, VStack } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";
import PlayersList from "./Components/PlayerList";

const HomePage: React.FC = () => {

    return (
        <>
        <Navbar />
        <Box width={'100%'} height={'100%'}>
        <PlayersList players={[{address: '0x123', amount: 100}, {address: '0x456', amount: 200}, {address: '0x789', amount: 300}, {address: '0xabc', amount: 400}]} />
        </Box>
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