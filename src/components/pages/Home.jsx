import { Heading, Text, Link, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";

export default function Home() {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      alignItems={{md:"center", lg: "flex-start"}}
      w={{ base: "100%", sm: "80%", md: "60%", lg: "90%", xl: "80%" }}
      mt={{ base: "3em", md: "4em", lg: "8em" }}
      mb={{lg: "2em"}}
      mx="auto"
      pos={"relative"}
    >
      <Flex
        direction={"column"}
        alignItems={{ md: "center", lg: "flex-start" }}
        justifyContent={"space-between"}
        color="primary"
        textTransform={"uppercase"}
        fontSize="1em"
        fontFamily="Barlow Condensed"
        mb={{ base: "3em", lg: "0" }}
        textAlign={{ base: "center", lg: "left" }}
        w={{lg: "40%"}}
      >
        <Heading
          as={"h4"}
          fontWeight="normal"
          fontSize={["1em", "1em", "1.25em"]}
          letterSpacing={"3px"}
        >
          so, you want to travel to
        </Heading>
        <Heading
          as={"h1"}
          fontFamily="Bellefair"
          fontSize={["4em", "4.5em", "9em"]}
          py=".3em"
          pb={{ md: "0" }}
        >
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
        w={{ base: "150px", md: "242px", lg: "240px", xl: "274px"}}
        h={{ base: "150px", md: "242px", lg: "240px", xl: "274px"}}
        mx="auto"
        mt={{lg: "77px"}}
        borderRadius="full"
        textTransform="uppercase"
        fontSize={{ base: "1.25em", md: "2em" }}
        textAlign="center"
        position="relative"
        display={"inline-flex"}
        justifyContent="center"
        alignItems="center"
        _before={{
          content: '""',
          backgroundColor: "rgba(255, 255, 255, .3)",
          position: "absolute",
          top: {lg: "-55px", xl: "-77px"},
          left:{lg: "-55px", xl: "-77px"},
          display: {base: "none", lg:'inline-block'},
          borderRadius: "50%",
          width: {lg: "350px", xl:"418px"},
          height: {lg: "350px", xl:"418px"},
        }}
      >
        <Link as={ReactLink} to="/destination" display={"inline-block"}>
          Explore
        </Link>
      </Box>
    </Flex>
  );
}
