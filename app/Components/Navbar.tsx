import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    useColorMode,
    HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@mysten/dapp-kit';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={'gray.200'} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <HStack spacing={8} alignItems={'center'}>
                    <Box>Logo</Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Button variant="solid">Button 1</Button>
                        <Button variant="solid">Button 2</Button>
                        <Button variant="solid">Button 3</Button>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <ConnectButton />

                    <Button
                        onClick={toggleColorMode}
                        aria-label="Toggle color mode"
                    >
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
