import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header2: {
        color: '#fff'
    }
})

// const path = __dirname + '/images';
// console.log('path:', path)

// const images = require('./images');
// console.log('images: ', images);

export default withStyles(styles)(class Gallery extends Component {

    projects = []

    componentWillMount() {
        this.projects = this.props.projects || [];
    }

    render() {

        const { classes } = this.props;

        return (
            <div className='alignLeft' style={{ zIndex: 2 }}>
                <ul>
                    <h2 className={classes.header2}>Projects: </h2>
                    <Grid container spacing={16}>
                        {this.projects.map((project, index) => (
                            <ProjectCard
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