import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Intro from './intro/Intro';
import Bio from './bio/Bio';
import Timeline from './timeline/Timeline';
import Skills from './skills/Skills';
import Projects from './projects/Projects';

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