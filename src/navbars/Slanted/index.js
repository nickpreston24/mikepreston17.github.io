import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const SlantedNavbar = () => (

    <div className="container">
    <div id="logo">MICHAEL PRESTON</div>
    <div className="navigation-wrapper">
        <div className="navigation-button">
            <i className="fa fa-bars"></i>
        </div>
        <div className="navigation-menu">

            <ul>
                {/* <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">GALLERY</Link>{' '}</li>
                <li><Link to="/contact">CONTACT</Link>{' '}</li>
                <li><Link to="/aboutme">ABOUT</Link>{' '}</li>
                <li><Link to="/resume">RESUME</Link>{' '}</li> */}

                <Link to="/">HOME</Link>
                <Link to="/projects">GALLERY</Link>{' '}
                <Link to="/contact">CONTACT</Link>{' '}
                <Link to="/aboutme">ABOUT</Link>{' '}
                <Link to="/resume">RESUME</Link>{' '}

                {/* <ListItem component={Link} to="/" button>HOME</ListItem>
                <ListItem component={Link} to="/projects" button>GALLERY</ListItem>
                <ListItem component={Link} to="/contact" button>CONTACT ME</ListItem> */}

                <ListItem component={Link} to="/contact" button>CONTACT</ListItem>
                <ListItem component={Link} to="/contact" button>CONTACT</ListItem>
                <ListItem component={Link} to="/contact" button>CONTACT</ListItem>
                <ListItem component={Link} to="/contact" button>CONTACT</ListItem>

            </ul>

        </div>
    </div>
    <section className="hero">
        {/* <h1>Creative Design <br></br> <span> PORTFOLIO</span></h1> */}
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