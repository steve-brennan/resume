import React, { Component } from 'react';
import {Flex, Box} from 'grid-styled';
import styled from 'styled-components';
import SideBar from './SideBar';
import Main from './Main';

const MainLayout = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
`;


class App extends Component {
  render() {
    return (
      <MainLayout className="main-layout">
          <SideBar/>
          <Main/>
      </MainLayout>
    );
  }
}

export default App;
