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
    text-decoration: none;
    height: 100%;
    width: 100%;
    border: 1px outset #F8F8FF;

    &.intro-link {
        background-color: #42d9f4;
        color: white;
        line-height: 1000%;
    }
    &.bio-link, &.timeline-link, &.skills-link, &.projects-link {
         background-color: #FFFFFF;
         color: #42d9f4;
         line-height: 1000%;
    }
    &.active {
        border-right: 0px;

        &.intro-link {
            border-top: 0px;
        }

        &.bio-link, &.timeline-link {
            border-top: 1px outset #F8F8FF;
            border-bottom: 1px outset #F8F8FF;

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
    margin-left: 0px;
    margin-right: 0px;
    display: flex;
    height: 100%;
    width: 100px;
    padding-left: 0px;
    padding-top: 1px;
    padding-bottom: 1px;

    &.listitem-intro {
        padding-top: 0px;
    }
`;

const NavSection = styled.section`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0px;
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
                        <NavListItem className="listitem-intro">
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