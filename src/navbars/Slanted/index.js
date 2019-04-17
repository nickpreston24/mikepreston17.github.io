import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Typography from "@material-ui/core/Typography";

const links = [
    { route: '/', name: 'HOME' },
    { route: '/projects', name: 'GALLERY' },
    { route: '/contact', name: 'CONTACT' },
    { route: '/resume', name: 'RESUME' },
    { route: '/aboutme', name: 'ABOUT' },
]

const SlantedNavbar = () => (
    <div className="container">
        <div className="navigation-wrapper">
            <div className="navigation-button">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navigation-menu">
                <ul>
                    {links.map(({ name, route }, index) => <Typography component="li" key={index}>
                        <Link to={route}>{name}</Link>
                    </Typography>)}
                </ul>
            </div>
        </div>
    </div>
)

export default SlantedNavbar;