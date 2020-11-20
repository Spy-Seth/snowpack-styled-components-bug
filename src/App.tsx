import React from "react";
import { Flex, Box } from "reflexbox/styled-components";

interface AppProps {}

function App({}: AppProps) {
  return (
    <React.Fragment>
      <h1>Hello world</h1>
      <Flex
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Box>Box A</Box>
        <Box>Box B</Box>
        <Box>Box C</Box>
      </Flex>
    </React.Fragment>
  );
}

export default App;
