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

export default function Destination({ data, isLoading, hasError }) {
  const [destIndex, setDestIndex] = useState(0);

  let { name, description, distance, travel, images } = data[destIndex];
  return (
    <Box textTransform={"uppercase"} w={{ lg: "85%" }} mx={{ lg: "auto" }} animation="slideIn .7s ease .1s running" position="relative">
      <Heading
        as={"h3"}
        fontSize={{ base: "1em", md: "1.25em", lg: "1.75em" }}
        fontWeight="normal"
        letterSpacing={"2px"}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: "2.4em" }}
        mb={{ base: "1.2em" }}
      >
        <Text as="span" opacity=".25">
          01
        </Text>{" "}
        Pick your destination
      </Heading>
      <Flex
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
        width={{ md: "70%", lg: "80%" }}
        mx={"auto"}
        justifyContent={{ lg: "space-between" }}
      >
        <Box
          width={{ base: "10.625em", md: "18.75em", lg: "27.8125" }}
          my={{ base: "1.2em" }}
        >
          <Img srcSet={`${images.webp}, ${images.png}`} w="100%" h="100%" />
        </Box>
        <Box textAlign={{ base: "center", lg: "left" }} w={{ lg: "50%" }}>
          <List
            display={"flex"}
            w={{ base: "18.75em" }}
            mx={{ base: "auto", lg: "0" }}
            fontSize={{ base: "0.875em", lg: "1em" }}
            justifyContent={{ base: "space-between" }}
            pos="relative"
            my="1em"
          >
            {data.map(({ name }, index) => (
              <ListItem
                key={index}
                letterSpacing={"3px"}
                onClick={() => setDestIndex(index)}
                overflow="hidden"
                pos="relative"
                pb=".5em"
                cursor={"pointer"}
                className="group"
                color={`${index === destIndex ? "#fff" : "#D0D6F9"}`}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: `${index === destIndex ? "0" : "-.3em"}`,
                  left: "0",
                  w: "75%",
                  h: ".2em",
                  _groupHover: { bottom: "0" },
                  backgroundColor: "#fff",
                }}
              >
                {name}
              </ListItem>
            ))}
          </List>
          <Box fontSize={{ base: "0.9375em", md: "1em" }}>
            <Heading
              as={"h1"}
              fontFamily="Bellefair"
              fontWeight={"normal"}
              fontSize={{ base: "3.5em", md: "5em", lg: "6.25em" }}
              color="#fff"
            >
              {name}
            </Heading>
            <Text
              as={"p"}
              textTransform="none"
              color="#D0D6F9"
              fontSize={{ lg: "1.125em" }}
              lineHeight={{ lg: "1.7em" }}
            >
              {description}
            </Text>
          </Box>
          <Flex
            my={{ base: "1.2em", md: "2.4em" }}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={{
              base: "center",
              md: "space-around",
              lg: "space-between",
            }}
            borderTop={{ base: "1px solid #383B4B" }}
          >
            <Box pt={{ base: "1.2em" }} w={{ lg: "50%" }}>
              <Heading
                as="h4"
                fontSize={{ base: "0.875em" }}
                fontWeight="normal"
                color="#D0D6F9"
                mb=".5em"
              >
                Avg. distance
              </Heading>
              <Text
                fontSize={{ base: "1.75em" }}
                color="#fff"
                fontFamily="Bellefair"
              >
                {distance}
              </Text>
            </Box>
            <Box pt={{ base: "1.2em" }} w={{ lg: "50%" }}>
              <Heading
                as="h4"
                fontSize={{ base: "0.875em" }}
                fontWeight="normal"
                color="#D0D6F9"
                mb=".5em"
              >
                Est. travel time
              </Heading>
              <Text
                fontSize={{ base: "1.75em" }}
                color="#fff"
                fontFamily="Bellefair"
              >
                {travel}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
