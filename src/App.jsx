import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import SlantedNavbar from './components/navbars/Slanted'
import { About, Landing, Contact, Resume, Gallery } from './pages';
import EntryContextProvider from './contexts/EntryContextProvider'

import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <EntryContextProvider>
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
                            <Redirect to="/" />
                            {/* <Route render={() => <h1>Page not found</h1>} /> */}
                        </Switch>
                    </EntryContextProvider>
                </Router>
            </>
        );
    }
}

export default App;
