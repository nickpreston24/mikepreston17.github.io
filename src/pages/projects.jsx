import React, { Component } from 'react';
import axios from 'axios';
import ProjectCard from "../components/DemoCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    h2:{
        color: '#fff'
    }
})

export default withStyles(styles)(class Gallery extends Component {

    projects = []

    // TODO: Load the projects list from your html or the first running index.js, where possible for reduced ping-up time.
    // Ping your projects
    pingAll = (urls) => {
        if(!urls || urls.length == 0)
            return;

        axios.all([
            urls.map(url=>axios.get(url))
        ])
        .catch(console.error)
    }

    componentWillMount() {
        console.log('mounting...')
        this.projects = require('./data/projects.json');

        this.pingAll(this.projects.map(p=>p.url));
    }

	render() {
		return (
            <div style={{zIndex: -2}}>
            <ul>
                <h2>Projects: </h2>

                <Grid container spacing={16}>
                {/* <div>Projects Grid</div> */}
				{this.projects.map(project => (
                    <ProjectCard
                        img={"../images/" + project.img}
                        description={project.description}
                        link={project.url}
                        key={project.name}
                        name={project.name}
                        />
				))}
                </Grid>
			</ul>
            </div>
		);
    }
})