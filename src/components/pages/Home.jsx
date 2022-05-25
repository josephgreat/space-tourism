import { Heading, Text, Link, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Flex
        direction={"column"}
        alignItems="center"
        justifyContent={"space-between"}
        color="primary"
        textTransform={"uppercase"}
        fontSize="1em"
        fontFamily="Barlow Condensed"
        my="3em"
        textAlign={"center"}
      >
        <Heading
          as={"h4"}
          fontWeight="normal"
          fontSize="1em"
          letterSpacing={"3px"}
        >
          so, you want to travel to
        </Heading>
        <Heading as={"h1"} fontFamily="Bellefair" fontSize="4.5em" py=".3em">
          space
        </Heading>
        <Text textTransform={"none"} fontFamily="Barlow" lineHeight="25px">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </Flex>
      <Box
        backgroundColor={"#fff"}
        color={"#000"}
        px="1.5em"
        pt="3em"
        w="150px"
        height="150px"
        mx="auto"
        pb="1.8em"
        borderRadius="full"
        textTransform="uppercase"
        fontSize={"1.25em"}
        textAlign="center"
      >
        <Link as={ReactLink} to="/destination">
          Explore
        </Link>
      </Box>
    </Box>
  );
}
