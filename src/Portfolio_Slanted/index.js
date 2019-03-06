import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import About from '../Portfolio_MDL/about';
// import Landing from '../Portfolio_MDL/landing';
// import Contact from '../Portfolio_MDL/contact';
// import Projects from '../Portfolio_MDL/projects';
// import Resume from '../Portfolio_MDL/resume';
// import { Layout, Header, Footer, FooterSection, FooterLinkList, Navigation, Drawer, Content } from 'react-mdl';

const Portfolio = () => (

    <div className="container">
    {/* <div id="logo">MP</div> */}
    <div className="navigation-wrapper">
        <div className="navigation-button">
            <i className="fa fa-bars"></i>
        </div>
        <div className="navigation-menu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/projects">GALLERY</Link>{' '}</li>
            <li><Link to="/contact">CONTACT</Link>{' '}</li>
            <li><Link to="/aboutme">ABOUT</Link>{' '}</li>
            <li><Link to="/resume">RESUME</Link>{' '}</li>
        </div>
    </div>                
    <section className="hero">
        <h1>Creative Design <br></br> <span> PORTFOLIO</span></h1>
        <div className="button">
            {/* <a href="#" className="btn1">See Portfolio!</a> */}
            <Link className="btn1" to="/projects">See Portfolio!</Link>
            <a href="https://www.linkedin.com/in/michael-n-preston/" className="btn2">Connect on LI!</a>
        </div>
    </section>
    </div>
    
)



export default Portfolio;