import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Header, Footer, FooterSection, FooterLinkList, Navigation, Drawer, Content } from 'react-mdl';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Portfolio = () => (

    <Layout className="container">
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
            {/* <Main /> */}
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/aboutme" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
            </Switch>
        </Content>
        {/* <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="/">Help</a>
                        <a href="/">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer> */}
    </Layout>
	
);

export default Portfolio;
