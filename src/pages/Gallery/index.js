import React, { Component } from 'react';
import Project from "./Project";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header2: {
        color: '#fff'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    // grid: {
    //     size: theme.spacing(1)
    // },
})

export default withStyles(styles)(
class Gallery extends Component {

    projects = []

    componentWillMount() {
        this.projects = this.props.projects || [];
    }

    render() {

        const { classes } = this.props;
        const { size } = classes;
        // console.log('size:', size)
        return (
            <div className='alignLeft' style={{ zIndex: 2 }}>
                <ul>
                    <h2 className={classes.header2}>Projects: </h2>

                    <Grid container spacing={size || 10}>
                        {this.projects.map((project, index) => (
                            <Project
                                key={index}
                                {...project}
                            />
                        ))}
                    </Grid>
                </ul>
            </div>
        );
    }
})