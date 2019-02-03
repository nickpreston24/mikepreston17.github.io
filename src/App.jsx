import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Footer, FooterSection, FooterLinkList, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Resume from './components/resume';

class App extends Component {
	render() {
		return (
			<body>
				<title>Portfolio</title>
				<div className="demo-big-content">
					{/* <h1>Hello, World!</h1> */}
					{/* justifies incorrectly */}
					<Layout>
						<Header title="Mike Preston's Portfolio!" scroll>
							<Navigation>
								<Link to="/resume">Resume</Link>
								<Link to="/aboutme">About Me</Link>
								<Link to="/projects">Projects</Link>
								<Link to="/contact">Contact</Link>
							</Navigation>
						</Header>
						<Drawer title="Title">
							<Navigation>
                                <Link to="/resume">Resume</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
							</Navigation>
						</Drawer>
						<Content>
							<div className="page-content" />
							{/* body goes here */}
							<Main />
						</Content>
					</Layout>
				</div>
				{/* <Footer size="mini">
					<FooterSection type="left" logo="Title">
						<FooterLinkList>
							<a href="/">Help</a>
							<a href="/">Privacy & Terms</a>
						</FooterLinkList>
					</FooterSection>
				</Footer> */}
			</body>
		);
	}
}

export default App;
