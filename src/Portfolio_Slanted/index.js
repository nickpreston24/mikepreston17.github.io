import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../Portfolio_MDL/about';
import Landing from '../Portfolio_MDL/landing';
import Contact from '../Portfolio_MDL/contact';
import Projects from '../Portfolio_MDL/projects';

const Portfolio = () => (

    <div className="container">
    <div id="logo">MP</div>
    <div className="navigation-wrapper">
        <div className="navigation-button">
            <i className="fa fa-bars"></i>
        </div>
        <div className="navigation-menu">
            <ul>               
                {/* TODO: Refactor to use Links, someohow */}
                {/* <Link to="/projects">GALLERY</Link> */}
                <li><a href="https://mikepreston17.github.io/">HOME</a></li>
                <li><a href="https://mikepreston17.github.io/projects">GALLERY</a></li>
                <li><a href="https://mikepreston17.github.io/contact">CONTACT</a></li>
                <li><a href="https://mikepreston17.github.io/aboutme">ABOUT</a></li>
                {/* <li><a href="https://mikepreston17.github.io/">LOCATION</a></li>
                <li><a href="https://mikepreston17.github.io/">TESTIMONIAL</a></li>
                <li><a href="https://mikepreston17.github.io/">PRICING</a></li> */}
            </ul>
        </div>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/aboutme' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/projects' component={Projects}/>
        </Switch>

    </div>            
    
    <section className="hero">
        <h1>Creative Design <br></br> <span> PORTFOLIO</span></h1>
        <div className="button">
            <a href="" className="btn1">Get Started</a>
            <a href="" className="btn2">Get Featured</a>
        </div>
    </section>
    </div>

)

export default Portfolio;