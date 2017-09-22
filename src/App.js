import React, { Component } from 'react';
import {Flex, Box} from 'grid-styled';
import SideBar from './SideBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Flex>
        <Box width={1/10}>
          <SideBar/>
        </Box>
        <Box width={9/10}>
          <Main/>
        </Box>
      </Flex>
    );
  }
}

export default App;
