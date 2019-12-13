import React, { Component, useState } from 'react';
import ProjectCard from "./ProjectCard";
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
})

// const Counter = () => {
//     const [count, setCount] = useState(0);
//     return (<button onClick={() => setCount(count + 1)}>{count}</button>)
// }

export default withStyles(styles)
    (
        class Gallery extends Component {

            projects = []

            componentWillMount() {
                this.projects = this.props.projects || [];
            }

            render() {

                const { classes } = this.props;
                const { size } = classes;

                return (
                    <div className='alignLeft' style={{ zIndex: 2 }}>
                        <ul>
                            <h1 className={classes.header2}>Projects: </h1>

                            <Grid container spacing={size || 10}>
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
        }
    )