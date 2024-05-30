import {
    Box,
    Flex,
    Text,
    HStack,
    Image,
} from '@chakra-ui/react';
import { ConnectButton } from '@mysten/dapp-kit';

const Navbar = () => {

    return (
        <Box bg={'gray.200'} p={4} width={'100%'} height={'80px'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                    <Image src="sui-sui-logo.png" alt="Logo" boxSize="40px" />
                    <Text
                    ml={2}
                    fontSize="xl"
                    fontFamily="Audiowide"
                    fontWeight="bold"
                    color="#6fbcf0"
                    >
                    SuiLotto
                    </Text>
                </Box>
                <ConnectButton />
            </Flex>
        </Box>
    );
};

export default Navbar;
