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
`;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavListItem = styled.li`
  border: 1px solid red;
  text-align: center;
  height: 85px;
  padding-top: 60px;
`;



class SideBar extends Component {

    render() {
        return (
            <section>
                <Flex column='1'>
                    <NavList>
                        <NavListItem><NavLink to="/">Intro</NavLink></NavListItem>
                        <NavListItem><NavLink to="/bio">Bio</NavLink></NavListItem>
                        <NavListItem><NavLink to="/timeline">Timeline</NavLink></NavListItem>
                        <NavListItem><NavLink to="/skills">Skills</NavLink></NavListItem>
                        <NavListItem><NavLink to="/projects">Projects</NavLink></NavListItem>
                    </NavList>
                </Flex>
            </section>
        );
    }
}

export default SideBar;