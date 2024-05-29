'use client';
import { Flex,Box,Text } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";

const HomePage: React.FC = () => {

    return (
        <>
        <Navbar />
            <Text fontSize="5xl">Hello World</Text>
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