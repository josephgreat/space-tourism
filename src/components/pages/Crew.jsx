import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Img,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

export default function Crew({ data, isLoading, hasError }) {
  const [crewIndex, setCrewIndex] = useState(0);
  if (isLoading || data === undefined)
    return (
      <div>
        <Spinner color="#D0D6F9" thickness=".4em" speed=".7s" size={"xl"} />
      </div>
    );
  if (hasError) return <div>Error</div>;
  let { name, bio, role, images } = data[crewIndex];
  return (
    <Box
      textTransform={"uppercase"}
      w={{ lg: "85%" }}
      mx={{ lg: "auto" }}
      mb={{ base: "3em" }}
      overflow="hidden"
      animation="slideIn .7s ease .1s" position="relative" 
    >
      <Heading
        as={"h3"}
        fontSize={{ base: "1em", md: "1.25em", lg: "1.75em" }}
        fontWeight="normal"
        letterSpacing={"2px"}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: "2.4em" }}
        mb={{ base: "1.2em", md: "1.5em" }}
      >
        <Text as="span" opacity=".25" pr=".5em">
          02
        </Text>
        meet your crew
      </Heading>
      <Flex
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
        mx={"auto"}
        justifyContent={{ lg: "space-between" }}
      >
        <Box
          width={{ base: "10.625em", md: "18.75em", lg: "40%" }}
          mt={{ base: "1.2em" }}
          order={{ base: 1, md: 2 }}
          h="100%"
          maxH={"38em"}
        >
          <Img srcSet={`${images.webp}, ${images.png}`} w="100%" h="100%" />
        </Box>
        <Flex
          direction={"column"}
          textAlign={{ base: "center", lg: "justify" }}
          w={{ md: "70%", lg: "45%" }}
          order={{ base: 2, md: 1 }}
          borderTop={{ base: "1px solid #383B4B", md: "none" }}
        >
          <List
            display={"flex"}
            w={{ base: "5.5em", lg: "8.25" }}
            mx={{ base: "auto", lg: "0" }}
            fontSize={{ base: "0.875em", lg: "1em" }}
            justifyContent={{ base: "space-between" }}
            my="2em"
            order={{ base: 1, md: 2 }}
          >
            {data.map((crew, index) => (
              <ListItem
                key={index}
                onClick={() => setCrewIndex(index)}
                w={{ base: "0.625em" }}
                h={{ base: "0.625em" }}
                borderRadius="full"
                cursor={"pointer"}
                bg="#fff"
                opacity={`${index === crewIndex ? "1" : ".17"}`}
                _hover={{ opacity: ".5" }}
                transition="all .3s ease"
              />
            ))}
          </List>
          <Box
            order={{ base: 2, md: 1 }}
            mb={{lg: "3.5em"}}
          >
            <Text fontFamily={"Bellefair"} color="#D0D6F9" fontSize={{ base: "0.9375em", md: "1.5em", lg: "2em" }}>
              {role}
            </Text>
            <Heading
              as={"h1"}
              fontFamily="Bellefair"
              fontWeight={"normal"}
              fontSize={{ base: "1.5em", md: "2.2em", lg: "3.2em" }}
              color="#fff"
              my=".2em"
            >
              {name}
            </Heading>
            <Text
              as={"p"}
              textTransform="none"
              color="#D0D6F9"
              fontSize={{ base: "0.9375em", md: "1em", lg: "1.125em"}}
              lineHeight={{ lg: "1.7em" }}            
            >
              {bio}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
