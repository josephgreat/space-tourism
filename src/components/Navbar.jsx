import { Box, Flex, Stack, Link, Text } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Close from "./Close";
import { Link as ReactLink } from "react-router-dom";

function Navbar({ active }) {
  let navlinks = ["home", "destination", "crew", "technology"];
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems="center" >
      <Box width={"2.5em"} height="2.5em">
        <Logo />
      </Box>
      <Box
        width={"1.2em"}
        height="1.2em"
        display={{ base: "block", md: "none" }}
        onClick={() => setNavIsOpen(true)}
      >
        <Hamburger />
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        width={{ base: navIsOpen ? "15em" : "0", md: "30em", lg: "58%" }}
        height={{md: "5em"}}
        overflow={"clip"}
        pos={{ base: "absolute", md: "unset" }}
        top="0"
        right={"0"}
        opacity={{ base: navIsOpen ? "1" : "0", md: "1" }}
        transition={"all .3s ease"}
        backgroundColor={"rgba(255,255,255,.1)"}
        backdropFilter="blur(1.5em)"
        minHeight={{base: "100vh", md: "auto"}}
        className="backdrop-blur"
        justifyContent={["", "", "space-between"]}
        alignItems={["", "", "flex-end"]}
        py={{ base: "1.5em", md: "0" }}
        pl={["0", "0", "2.43em"]}
        pr={["0", "0", "1.5em"]}
        zIndex="2"
      >
        <Box
          alignSelf={"flex-end"}
          w="1.2em"
          h="1.2em"
          mb="3.75em"
          mt=".5em"
          mr="1.5em"
          onClick={() => setNavIsOpen(false)}
          display={["block", "block", "none"]}
        >
          <Close />
        </Box>
        {navlinks.map((link, index) => (
          <Link
            as={ReactLink}
            to={link === "home" ? "/" : `/${link}`}
            px={["1.5em", "1.5em", "0"]}
            pb={["1.5em", "1.5em", "2em", "1.5em"]}
            display={"inline-block"}
            borderRight={{base: active === link && ".3em solid #fff", md: "none"}}
            letterSpacing={".2em"}
            fontSize={{ base: "0.875em", lg: "1.1em" }}
            fontWeight={"semi-bold"}
            wordSpacing={".2em"}
            key={index}
            position="relative"
            onClick={() => setNavIsOpen(false)}
            className="group"
            _hover={[{},{pb:"1.8em", textDecoration:"none"}]}
            >
            <Text as={"span"} p="0" display={["", "inline", "none", "inline"]}>
              0{index + 1}
            </Text>{" "}
            {link.toUpperCase()}
            <Box
              pos={"absolute"}
              bottom={active === link ? "0" : "-.2em"}
              left={"0"}
              width={"85%"}
              height={".2em"}
              background={"#fff"}
              display={{base: "none", md: "inline-block"}}
              _groupHover={{bottom: "0"}}
              transition="all .3s ease"
            ></Box>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}
export default memo(Navbar);
