import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import SideBar from './SideBar';
import Main from './Main';
import { connect } from 'react-redux'
import dbconfig from './firebase-config';
import * as firebase from 'firebase';
import 'firebase/firestore';

const theme = {
  primaryFontFamily: "'Roboto', sans-serif",
  
  primaryColor: "#00BFFF", 
  primaryColorLighter: '#87CEEB',
  primaryColorDarker: '#0074D9',

};

const Layout = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
`;


class App extends Component {

  constructor() {
    super();
    firebase.initializeApp(dbconfig);

  }



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
