import React, { Component, Fragment } from 'react';

class About extends Component {
	render() {
		return (
            <div>
                <header>

                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg p-3 mb-5 rounded">

                        <a className="navbar-brand accent" 
                            href="#">About Me</a>

                   </nav>
                </div>

                </header>

                <div className="container card shadow p-3 mb-5 bg-white rounded">
                    <div>
                        <div className="col-md-3 card float-left"> 
                            <h5>My likes:</h5>
                            <p>Cake, root beer, martial arts, and code!</p>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default About;
