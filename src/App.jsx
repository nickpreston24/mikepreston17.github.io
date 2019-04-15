import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import SlantedNavbar from './navbars/Slanted'

import About from './pages/about';
import Landing from './pages/Landing';
import Contact from './pages/contact';
import Resume from './pages/Resume';
import Gallery from './pages/Resume/projects';

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <SlantedNavbar />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route
                            path='/projects'
                            component={_ => <Gallery {...this.props} />}
                        />
                        <Route path='/aboutme' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path="/resume" component={Resume} />
                        <Route render={() => <h1>Page not found</h1>} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
