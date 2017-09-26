import React, { Component } from 'react';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

const NavLink = styled(Link)`
    color: red;
    text-decoration: none;
    margin: 0px;
    height: 100%;
    width: 100%;
    padding-top: 40px;
`;

const NavList = styled.ul`
  list-style-type: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
    border: 1px solid blue;
    text-align: center;
    padding: 0px;
    margin: 0 auto;
    display: flex;
    height: 100px;
    width: 100px;
`;

const NavSection = styled.section`
  border: 1px solid black;
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0px;
  background-color: #00BFFF;
`;



class SideBar extends Component {

    render() {
        return (
            <NavSection className="nav-section">
                    <NavList className="nav-list">
                        <NavListItem><NavLink to="/">Intro</NavLink></NavListItem>
                        <NavListItem><NavLink to="/bio">Bio</NavLink></NavListItem>
                        <NavListItem><NavLink to="/timeline">Timeline</NavLink></NavListItem>
                        <NavListItem><NavLink to="/skills">Skills</NavLink></NavListItem>
                        <NavListItem><NavLink to="/projects">Projects</NavLink></NavListItem>
                    </NavList>
            </NavSection>
        );
    }
}

export default SideBar;