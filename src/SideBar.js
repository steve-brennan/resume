import React, { Component } from 'react';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';

const SideNavLink = styled(NavLink)`
    color: red;
    text-decoration: none;
    height: 100%;
    width: 100%;
    border-right: 1px solid grey;
    &.bio-link, &.timeline-link, &.skills-link, &.projects-link {
         background-color: white;
    }
    &.active {
        border-bottom: 1px solid grey;
        border-top: 1px solid grey;
        border-right: 0px;

        &.intro-link {
            border-top: 0px;
            border-bottom: 1px solid grey;
        }
    }
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
    text-align: center;
    margin: 0 auto;
    display: flex;
    height: 100%;
    width: 100px;
`;

const NavSection = styled.section`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0px;
  background-color: #00BFFF;
`;



class SideBar extends Component {
    constructor(props) {
        super(props);
        this.handleNavigationChange = this.handleNavigationChange.bind(this);
        this.state = {currentView: 'intro'};
    }

    handleNavigationChange(e) {
        this.setState({currentView:e.target.firstChild.textContent.toLowerCase()});
    }

    render() {
        return (
            <NavSection className="nav-section">
                    <NavList className="nav-list">
                        <NavListItem>
                            <SideNavLink exact to="/" className="intro-link">Intro</SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/bio" className="bio-link">Bio</SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/timeline" className="timeline-link">Timeline</SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/skills" className="skills-link">Skills</SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/projects" className="projects-link">Projects</SideNavLink>
                        </NavListItem>
                    </NavList>
            </NavSection>
        );
    }
}

export default SideBar;