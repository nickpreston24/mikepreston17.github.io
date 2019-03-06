import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';
import SlantedNavbar from './navbars/Slanted'

import About from './pages/about';
import Landing from './pages/landing';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';

class App extends Component {
	render() {
        return (        
            <Router>
                <div>
                <SlantedNavbar/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/aboutme' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path="/resume" component={Resume} />
                    <Route render={() => <h1>Page not found</h1>} />
                    <Redirect to="/" />
                </Switch>
                </div>
            </Router>
		);
	}
}
            

export default App;
