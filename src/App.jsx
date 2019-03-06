import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';
import Portfolio from './Portfolio_Slanted'
// import Portfolio from './Portfolio_MDL'
import About from './Portfolio_MDL/about';
import Landing from './Portfolio_MDL/landing';
import Contact from './Portfolio_MDL/contact';
import Projects from './Portfolio_MDL/projects';
import Resume from './Portfolio_MDL/resume';

class App extends Component {
	render() {
        return (        
            <Router>
                <div>
                <Portfolio/>
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
