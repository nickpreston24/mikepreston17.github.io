import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const links = [
    { route: '/', name: 'HOME', icon: 'fas fa-home' },
    { route: '/projects', name: 'GALLERY', icon: 'far fa-images' },
    { route: '/contact', name: 'CONTACT', icon: 'fas fa-mobile-alt' },
    { route: '/resume', name: 'RESUME', icon: 'fas fa-user-tie' },
    { route: '/aboutme', name: 'ABOUT', icon: 'far fa-address-card' },
]
const styles = theme => ({
    iconStyle:
    {
        marginRight: '15px',
        // padding: '1px'
    }
})

const SlantedNavbar = (props) => {

    const { classes } = props;
    const { iconStyle } = classes;
    console.log('iconStyle:', iconStyle)
    console.log('classes:', classes)
    console.log('props:', props)

    return (
        <div className="container">
            <div className="navigation-wrapper">
                <div className="navigation-button">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navigation-menu">
                    <ul>
                        {links.map(({ name, route, icon }, index) =>
                            <Typography component="li" key={index}>
                                {icon && <Icon className={classNames(icon, iconStyle)} />}
                                <Link to={route}>{name}</Link>
                            </Typography>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SlantedNavbar);