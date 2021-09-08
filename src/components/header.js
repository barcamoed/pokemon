import React from 'react'

import {
    Box,
    Stack,
    Heading,
    Flex,
    Button
  } from "@chakra-ui/react";
  import { Link } from 'react-router-dom';



const Header = () =>{

    return (
        <Flex
        as='nav'
        align='center'
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="yellow.500"
        color="white"
        >

        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                POKEMON
            </Heading>
        </Flex>
        <Box >
            <Stack isInline spacing={3}>
                <Button bg={"#D69E2E"} _hover={{bg:'#ffffff',color:'#D69E2E'}}>
                <Link to='/'>Home</Link>
                </Button>
                <Button bg={"#D69E2E"} _hover={{bg:'#ffffff',color:'#D69E2E'}}>
                <Link to='/my-team'>Your Pokemon</Link>
                </Button>
            </Stack>
        </Box>


        </Flex>

    )

}

export default Header