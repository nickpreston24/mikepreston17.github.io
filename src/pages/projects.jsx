import React, { Component } from 'react';
import ProjectCard from "../components/ProjectCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header2:{
        color: '#fff'
    }
})

export default withStyles(styles)(class Gallery extends Component {

    projects = []

    componentWillMount() {
        this.projects = this.props.projects;
    }

	render() {

        const {classes} = this.props;

		return (
            <div className='container' style={{zIndex: 2}}>
            <ul>
                <h2 className={classes.header2}>Projects: </h2>
                <Grid container spacing={16}>
				{this.projects.map(project => (
                    <ProjectCard
                        img={"../images/" + project.img}
                        description={project.description}
                        link={project.url}
                        key={project.name}
                        name={project.name}
                        />
				))
                }
                </Grid>
			</ul>
            </div>
		);
    }
})