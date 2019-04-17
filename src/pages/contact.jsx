import React from 'react';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";

const styles = theme => ({
    header: {
        color: 'gold'
    },
    paragraph: {
        color: '#c44',
        fontSize: '24'
    },

    projects: {
        color: 'hotpink',
    },

    panel: {
        background: "#fff"
    },
    button: {
        border: '1px solid blue',
        color: 'red'
    }
})

const Contact = (props) => {

    const { classes } = props;
    const { button, header, panel } = classes;

    return (
        <div className='alignLeft'>
            <h1 className={header}>Contact Me!</h1>
            <div className={panel}>
                <ul>
                    <ListItem>Mobile: (817) 565-2372</ListItem>
                    <ListItem>Email: michael.n.preston@gmail.com</ListItem>
                    <Button className={button} href="https://www.linkedin.com/in/michael-n-preston/">
                        <Icon className="fab fa-linkedin" />
                    </Button>
                </ul>
            </div>
        </div>
    )
};

export default withStyles(styles)(Contact);
