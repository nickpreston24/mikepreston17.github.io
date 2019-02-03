import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/aboutme" component={About} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/resume" component={Resume} />
	</Switch>
);

export default Main;
