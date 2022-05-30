import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Img,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

export default function Technology({data, isLoading, hasError, screenSize}) {
    const [techIndex, setTechIndex] = useState(0);
    if (isLoading || data === undefined) return <div>Loading</div>;
    if (hasError) return <div>Error</div>;
    console.log(screenSize);
    let { name, description, images } = data[techIndex];
    return (
      <Box
        textTransform={"uppercase"}
        w={{ lg: "85%" }}
        mx={{ lg: "auto" }}
        mb={{ base: "3em" }}
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
            03
          </Text>
          space launch 101
        </Heading>
        <Flex
          alignItems={{ base: "center" }}
          flexDirection={{ base: "column", lg: "row" }}
          mx={"auto"}
          justifyContent={{ lg: "space-between" }}
        >
          <Box
            width={{ base: "calc(100% + 4em)", lg: "40%" }}
            mt={{ base: "1.2em" }}
            order={{ base: 1, md: 2 }}
            pos={"relative"}
            right={{base: "unset", lg: "calc(-8.5% - .2em)"}}
          >
            <Img srcSet={`${screenSize === "desktop" ? images.portrait : images.landscape}`} w="100%" h="100%" />
          </Box>
          <Flex
            direction={{base: "column", lg: "row"}}
            textAlign={{ base: "center", lg: "justify" }}
            w={{ md: "70%", lg: "55%" }}
            order={{ base: 2, lg: 1 }}
            mt={{md: "1em"}}
            mb={{md: "4em"}}
          >
            <List
              display={"flex"}
              flexDirection={{base: "row", lg: "column"}}
              w={{ base: "9em", md: "13.125em", lg: "100%" }}
              mx={{ base: "auto", lg: "0" }}
              fontSize={{ base: "1em", md: "1.5em", lg: "1.8em" }}
              justifyContent={{ base: "space-between" }}
              my={{base: "2em", lg: "0"}}
            >
              {data.map((tech, index) => (
                <ListItem
                  key={index}
                  onClick={() => setTechIndex(index)}
                  w={{base: "2.5em", md: "3.5em", lg: "2.2em"}}
                  h={{base: "2.5em", md: "3.5em", lg: "2.2em"}}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  borderRadius="full"
                  cursor={"pointer"}
                  bg={`${index === techIndex ? "#fff" : "transparent"}`}
                  color={`${index === techIndex ? "#0B0D17" : "#fff"}`}
                  border={`1px solid ${index === techIndex ? "#fff" : "rgba(255, 255, 255, .25)"}`}
                  transition="all .3s ease"
                >
                    {index + 1}
                    </ListItem>
              ))}
            </List>
            <Box
            >
              <Text color="#D0D6F9" letterSpacing={'.3em'} fontSize={"1em"}>
                The terminology...
              </Text>
              <Heading
                as={"h1"}
                fontFamily="Bellefair"
                fontWeight={"normal"}
                fontSize={{ base: "1.5em", md: "2.5em", lg: "3.3em" }}
                color="#fff"
                my=".2em"
              >
                {name}
              </Heading>
              <Text
                as={"p"}
                textTransform="none"
                color="#D0D6F9"
                fontSize={{ md: "1em", lg: "1.125em"}}
                lineHeight={{ lg: "1.7em" }}   
                letterSpacing={"1px"}         
              >
                {description}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
}
