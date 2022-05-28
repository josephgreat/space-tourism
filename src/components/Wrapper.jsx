import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { fetchApi } from "../fetchApi";
import Navbar from "./Navbar";
const wrapper = (Component, title, data,isLoading, hasError) => {
  function Wrapper() {
    const [size, setSize] = useState("desktop");
    let componentData = null;
    if(title !== "home") componentData = data[`${title}`];
   
    let checkScreenSize = () => {
      let w = window.innerWidth;
      if (w <= 375) setSize("mobile");
      else if (w <= 768 && w > 375) setSize("tablet");
      else if (w <= 1440 && w > 768) setSize("desktop");
      else setSize("desktop");
    };

  
    
    useEffect(() => {
     window.addEventListener("load", () => {checkScreenSize()});
      window.addEventListener("resize", checkScreenSize);
      return () => {
        window.removeEventListener("load", checkScreenSize);
        window.removeEventListener("resize", checkScreenSize);
      };
    },  []);

    let checkPage = () => {
      if(title === "home")  return <Component />
      else  return <Component data={componentData} isLoading={isLoading} hasError={hasError} />
    }

    return (
      <Container
        maxWidth="auto"
        minHeight={"100vh"}
        m="0"
        p={{ base: "1.5em", md: "0" }}
        pt={{ base: "1.5em", md: "0", lg: "1.5em" }}
        pl={{ base: "1.5em", md: "1.5em" }}
        pos={"relative"}
        background={`
            #000 
            url(${process.env.PUBLIC_URL}/assets/${title}/background-${title}-${size}.jpg)
            top center no-repeat
        `}
      >
        <Navbar active={title} />
        {checkPage()}
      </Container>
    );
  }
  return Wrapper;
};
export default wrapper;
