import React from 'react';
import PropTypes from "prop-types";

/** MUI */
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';

/** Font Awesome */
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const styles = theme => ({
    grid: {
        padding: theme.spacing.unit * 100,
        margin: "auto",
        position: "relative",
        top: "25 %",
        width: "50 %",
        height: "50 %"
    },
    toolbar: {
        color: "white",
        backgroundColor: "#0079c1"
    },
    card: {
        color: 'blue',
        "max-width": "90%"
    },
    media: {
        height: 0,
        paddingTop: '90%',
        margin: "10px",
    },
    playButton: {
        color: 'white',
        backgroundColor: "#f20c4a",
        margin: '10px',
        fontSize: "250%",
    },
    sourceButton: {
        color: '#f20c4a',
        backgroundColor: "black",
        margin: '10px',
        fontSize: "250%",
    },
    icon: {
        boxSizing: 'border-box',
        fontSize: 48,
        textAlign: 'center'
    },
});

const Project = (props) => {

    const { classes } = props;
    const { grid, actions, card, media, toolbar, playButton, sourceButton } = classes;
    const { name, img, description, liveLink, tech } = props;

    img && console.log('img: ', img);

    return (
        <Grid
            item xs={10}
            className={grid}
        >
            <Card className={card}>
                <CardHeader
                    title={name}
                    subheader={description}
                />
                {img && <CardMedia
                    title={name}
                    className={media}
                    image={img || 'noimage'}
                />}
                <CardContent>
                    {
                        tech &&
                        <ul>
                            <h6>Tech Stack: </h6>
                            {tech.map((technology, index) =>
                                <Typography component="li" key={index}>
                                    {technology}
                                </Typography>)}
                        </ul>
                    }
                </CardContent>
                <CardActions className={actions} disableActionSpacing>
                    <Tooltip title={'Play ' + name} aria-label={name}>
                        <Button
                            variant="contained"
                            size="small"
                            href={liveLink}
                            alt={name}
                            className={playButton}
                        >
                            <Icon className={classNames(classes.icon, 'fas fa-play-circle')} />
                        </Button>
                    </Tooltip>
                    <Tooltip title={name + ' repo'} aria-label={name}>
                        <Button
                            variant="contained"
                            size="small"
                            href={liveLink}
                            className={sourceButton}
                        >
                            <Icon className={classNames(classes.icon, 'fab fa-github')} />
                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    )
}

Project.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);