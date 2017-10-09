import React, { Component } from 'react';
import {Flex, Box} from 'grid-styled';
import styled, {ThemeProvider} from 'styled-components';
import SideBar from './SideBar';
import Main from './Main';

const theme = {
  primaryFontFamily: "'Roboto', sans-serif",
  primaryColor: "#00BFFF", 
  primaryColorLighter: '#87CEEB',
  primaryColorDarker: '#0074D9',

  primaryBorderColor: '#F0F8FF' // aliceblue

};

const Layout = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
`;


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout className="layout">
          <SideBar/>
          <Main/>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
