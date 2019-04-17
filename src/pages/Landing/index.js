import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Landing = () => {

    return (
        <>
            <section className="hero container">
                <div id="logo">MICHAEL PRESTON</div>
                <h1>Full Stack Design <br></br> <span> PORTFOLIO</span></h1>
                <div className="button">
                    <Link className="btn1" to="/projects">See Portfolio!</Link>
                    <a href="https://www.linkedin.com/in/michael-n-preston/" className="btn2">Connect on LI!</a>
                </div>
            </section>
        </>)
}

export default Landing;