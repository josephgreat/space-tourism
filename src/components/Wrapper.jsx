import { Container } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
const wrapper = (Component, title) => {

  function Wrapper() {
    const [size, setSize] = useState("desktop");
    let checkScreenSize = () => {
      let w = window.innerWidth;
      let h = window.innerHeight;
      console.log(w);
      if(w <= 375) setSize("mobile");
      else if(w <= 768 && w > 375) setSize("tablet");
      else if(w <= 1440 && w > 768) setSize("desktop");
      else setSize("desktop");

    }

    useEffect(() => {
      window.addEventListener("load", checkScreenSize);
      window.addEventListener("resize", checkScreenSize);
      
      return () => {
        window.removeEventListener("load", checkScreenSize);
        window.removeEventListener("resize", checkScreenSize);
      }
    }, [])
    
    return (
      <Container
        maxWidth="auto"
        minHeight={"100vh"}
        m="0"
        p={{base: '1.5em', md: "0"}}
        pt={{base: "1.5em", md:"0", lg: "1.5em"}}
        pl={{base: '1.5em', md: "1.5em"}}
        pos={"relative"}
        background={`
            #000 
            url(${process.env.PUBLIC_URL}/assets/${title}/background-${title}-${size}.jpg)
            top center no-repeat
        `}
      >
      <Navbar active={title} />
        <Component />
      </Container>
    );
  }
  return Wrapper;
};
export default wrapper;
