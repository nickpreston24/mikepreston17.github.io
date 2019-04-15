import React from 'react';
import { withStyles } from '@material-ui/core';
// import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem';

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
    }

})

const Contact = (props) => {

    const { classes } = props;

    return (
        <div className='container'>
            <h1 className={classes.header}>Contact Me!</h1>
            <div className={classes.panel}>

                {/* <Typography variant="p" align="center">LinkedIn: https://www.linkedin.com/in/michael-n-preston/</Typography>
                <Typography variant="p" align="center">Mobile: (817) 565-2372</Typography>
                <Typography variant="p" align="center">Email: michael.n.preston@gmail.com</Typography> */}

                <ListItem>Mobile: (817) 565-2372</ListItem>
                <ListItem>Email: michael.n.preston@gmail.com</ListItem>
                <ListItem><a href="https://www.linkedin.com/in/michael-n-preston/">LinkedIn</a></ListItem>

            </div>
        </div>
    )
};

export default withStyles(styles)(Contact);
