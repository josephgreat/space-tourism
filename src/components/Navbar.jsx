import { Box, Flex, Stack, Link } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Close from "./Close";
import { Link as ReactLink } from "react-router-dom";

function Navbar({ active }) {
  let navlinks = ["home", "destination", "crew", "technology"];
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Box width={"2.5em"} height="2.5em">
        <Logo />
      </Box>
      <Box width={"1.2em"} height="1.2em" onClick={() => setNavIsOpen(true)}>
        <Hamburger />
      </Box>
      <Stack
        direction={"column"}
        width="15.8em"
        pos="absolute"
        top="0"
        right={navIsOpen ? "0" : "-15.8em"}
        opacity={navIsOpen ? "1" : "0"}
        transition={"all .3s ease"}
        backgroundColor={"rgba(255,255,255,.1)"}
        backdropFilter="blur(1.5em)"
        minHeight="100vh"
        className="backdrop-blur"
        py="1.5em"
      >
        <Box
          alignSelf={"flex-end"}
          w="1.2em"
          h="1.2em"
          mb="3.75em"
          mt=".5em"
          mr="1.5em"
          onClick={() => setNavIsOpen(false)}
        >
          <Close />
        </Box>
        {navlinks.map((link, index) => (
          <Link
            as={ReactLink}
            to={link === "home" ? "/" : `/${link}`}
            p="1.5em"
            pt="0"
            display={"inline-block"}
            borderLeft={active === link && ".3em solid #fff"}
            letterSpacing={".2em"}
            fontWeight={"semi-bold"}
            wordSpacing={".2em"}
          >
            0{index + 1} {link.toUpperCase()}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}
export default memo(Navbar);
