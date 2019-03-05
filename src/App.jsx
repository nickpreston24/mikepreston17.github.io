import React, { Component } from 'react';
import './App.css';
// import Portfolio from './pages/Portfolio';

class App extends Component {
	render() {
		return (
            <div className="container">
            <div id="logo">RETRO</div>
            <div className="navigation-wrapper">
                <div className="navigation-button">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">GALLERY</a></li>
                        <li><a href="">CONTACT</a></li>
                        <li><a href="">LOCATION</a></li>
                        <li><a href="">TESTIMONIAL</a></li>
                        <li><a href="">PRICING</a></li>
                    </ul>
                </div>
            </div>            
            
            <section className="hero">
                <h1>Creative Design <br></br> <span> PORTFOLIO</span></h1>
                <div className="button">
                    <a href="" className="btn1">Get Started</a>
                    <a href="" className="btn2">Get Featured</a>
                </div>
            </section>
            </div>
		);
	}
}
            

export default App;
