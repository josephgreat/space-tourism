import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
const wrapper = (Component, title) => {
  
  function Wrapper() {
    return (
      <Container
        maxWidth="auto"
        minHeight={"100vh"}
        minWidth={"100vw"}
        m="0"
        p="1.5em"
        background={`
            #000 
            url(${process.env.PUBLIC_URL}/assets/${title}/background-${title}-mobile.jpg)
            top left no-repeat
        `}
      >
        <Navbar />
        <Component />
      </Container>
    );
  }
  return Wrapper;
};
export default wrapper;
