import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Intro from './Intro';
import Bio from './Bio';
import Timeline from './Timeline';
import Skills from './Skills';
import Projects from './Projects';

const Main = () => (

    <Switch>
        <Route exact path='/' component={Intro}/>
        <Route path='/bio' component={Bio}/>
        <Route path='/timeline' component={Timeline}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/projects' component={Projects}/>
    </Switch>
)

export default Main;