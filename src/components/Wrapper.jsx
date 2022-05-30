import { Container } from "@chakra-ui/react";

import Navbar from "./Navbar";
const wrapper = (Component, title,  screenSize, data, isLoading, hasError) => {
  function Wrapper(props) {
    let componentData = null;
    if(title !== "home") componentData = data[`${title}`];
   


    let checkPage = () => {
      if(title === "home")  return <Component {...props} />
      else  return <Component data={componentData} isLoading={isLoading} hasError={hasError} {...props} />
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
            url(${process.env.PUBLIC_URL}/assets/${title}/background-${title}-${screenSize}.jpg)
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
