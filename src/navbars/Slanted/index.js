import React from 'react';
import { Link } from 'react-router-dom';

const SlantedNavbar = () => (

    <div className="container">
    <div id="logo">MICHAEL PRESTON</div>
    <div className="navigation-wrapper">
        <div className="navigation-button">
            <i className="fa fa-bars"></i>
        </div>
        <div className="navigation-menu">
            <Link to="/">HOME</Link>
            <Link to="/projects">GALLERY</Link>{' '}
            <Link to="/contact">CONTACT</Link>{' '}
            <Link to="/aboutme">ABOUT</Link>{' '}
            <Link to="/resume">RESUME</Link>{' '}
        </div>
    </div>
    <section className="hero">
        <h1>Full Stack Design <br></br> <span> PORTFOLIO</span></h1>
        <div className="button">
            {/* <a href="#" className="btn1">See Portfolio!</a> */}
            <Link className="btn1" to="/projects">See Portfolio!</Link>
            <a href="https://www.linkedin.com/in/michael-n-preston/" className="btn2">Connect on LI!</a>
        </div>
    </section>
    </div>

)

export default SlantedNavbar;