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
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    width: 100%;
    border-bottom: 1px outset #F8F8FF;
    border-right: 1px outset #F8F8FF;
    border-radius: 1px;

    margin-top: 0px;
    margin-bottom: 0px;

    &.intro-link {
        background-color: #42d9f4;
        color: white;
        line-height: 250%;
        border: none;
        border-right: 1px outset #F8F8FF;
    }
    &.bio-link, &.timeline-link, &.skills-link, &.projects-link {
         background-color: #FFFFFF;
         color: #42d9f4;
         line-height: 250%;
    }
    &.active {
        border-right: 0px;

        &.intro-link {
            border: none;
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
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    margin-left: 0px;
    margin-right: 0px;
    display: flex;
    height: 100%;
    width: 100px;
    padding-left: 0px;
    /*padding-top: 1px;*/
    /*padding-bottom: 1px;*/

    margin-top: 0px;

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

const NavIcon = styled.i`
    font-size: 50px;
    line-height: 200%;
    $.icon-bio, &.icon-timeline, &.icon-skills, &.icon-projects {
        background-color: #FFFFFF;
    }

    $.icon-intro {
        background-color: #42d9f4;
    }

    
`



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
                            <SideNavLink exact to="/" className="intro-link">
                                Intro 
                                <NavIcon className="material-icons icon-intro">face</NavIcon>
                            </SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/bio" className="bio-link">
                                Bio
                                <NavIcon className="material-icons icon-bio">accessibility</NavIcon>
                            </SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/timeline" className="timeline-link">
                                Timeline
                                <NavIcon className="material-icons icon-timeline">timeline</NavIcon>
                            </SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/skills" className="skills-link">
                                Skills
                                <NavIcon className="material-icons icon-skills">build</NavIcon>
                            </SideNavLink>
                        </NavListItem>
                        <NavListItem>
                            <SideNavLink exact to="/projects" className="projects-link">
                                Projects
                                <NavIcon className="material-icons icon-projects">work</NavIcon>
                            </SideNavLink>
                        </NavListItem>
                    </NavList>
            </NavSection>
        );
    }
}

export default SideBar;