import React, { Component } from 'react';

class About extends Component {
	render() {
		return (

                <header>

                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg p-3 mb-5 rounded">

                            <a className="navbar-brand accent" href="#">About Me</a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <ul className="navbar-nav mr-auto"> */}
                                    {/* <li className="nav-item active"><a href="contact.html" className="link">Contact</a></li>
                                    <li className="nav-item active"><a href="portfolio.html" className="link">Portfolio</a></li> */}
                                {/* </ul> */}
                            </div>
                        </nav>
                    </div>

                </header>
		);
        {/*
                        <div className="container card shadow p-3 mb-5 bg-white rounded">
                            <div>
                                <div className="col-md-3 card float-left">
                                    <img className="card-img-top rounded shadow bounded" alt="Michael N Preston" src="assets/images/Me.jpg">
                                </div>
                                <div className="col-md-9">
                                    <h5>My likes:</h5>
                                    <p>I like cake, root beer, martial arts, and code!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo atque dolore,
                                        voluptatum
                                        illum quos perferendis praesentium officia obcaecati excepturi quibusdam natus eligendi dolorem
                                        beatae
                                        eaque aspernatur! Libero, ad aut!</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolores voluptatum dicta, cum
                                        enim
                                        distinctio quaerat saepe eius aliquid perferendis numquam ut reiciendis architecto inventore
                                        natus
                                        laudantium sapiente in nisi.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita obcaecati consequatur, quam rerum
                                        autem placeat eius dolore cumque nobis iste temporibus saepe aut provident cupiditate maxime. Nisi,
                                        recusandae? Atque, provident.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iusto nihil est obcaecati libero
                                        consequuntur reprehenderit debitis? Sunt obcaecati, necessitatibus facere voluptas nulla molestiae
                                        iure? Ipsum nulla eos ut inventore!</p>
                                </div>
                            </div>
                        </div> */}
	}
}

export default About;
