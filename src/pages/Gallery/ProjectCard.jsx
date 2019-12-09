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
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';

/** Font Awesome */
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const styles = theme => ({
    grid: {
        padding: theme.spacing(2),
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
        "max-width": "90%",
        size: theme.spacing(1)
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
        //Special hover color :)
        '&:hover': {
            color: red[800],
        },
    },
    sourceButton: {
        color: "#1ce",
        backgroundColor: "black",
        margin: '10px',
        fontSize: "250%",
    },
    icon: {
        boxSizing: 'border-box',
        fontSize: 48,
        textAlign: 'center',
        margin: theme.spacing(2),
    },
    chip: {
        margin: '3px'
    },
    header: {
        color: "#f20c4a",
        "font-weight": "bold"
    },
    shadow: {
        "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
});

const ProjectCard = (props) => {

    const { classes } = props;
    const { grid, actions, card, media,
        playButton, sourceButton, chip, header, shadow } = classes;
    const { name, img, description, liveLink, repo, tech } = props;

    // console.log('size:', card.size);
    return (
        <Grid
            item lg={10}
            className={grid}
        >
            <Card className={card}>

                <CardHeader
                    title={name}
                    subheader={description}
                />

                <CardContent>
                    {
                        tech &&
                        <div>
                            <h6 className={header}>Tech Stack: </h6>
                            {tech.map((technology, index) =>
                                <Chip
                                    label={technology}
                                    className={chip}
                                    color='primary'
                                    variant='default'
                                    key={index}
                                />)}
                        </div>
                    }
                </CardContent>

                <CardActions className={actions} disableactionspacing="true">
                    <Tooltip title={'Play ' + name} aria-label={name}>
                        <Button
                            variant="contained"
                            size="small"
                            href={liveLink}
                            alt={name}
                            className={classNames(playButton, shadow)}
                        >
                            <Icon className={classNames(classes.icon, 'fas fa-play-circle')} />
                        </Button>
                    </Tooltip>
                    <Tooltip title={name + ' repo'} aria-label={name}>
                        <Button
                            variant="contained"
                            size="small"
                            href={repo}
                            className={classNames(sourceButton, shadow)}
                        >
                            <Icon className={classNames(classes.icon, 'fab fa-github')} />
                        </Button>
                    </Tooltip>
                </CardActions>

                {img && <CardMedia
                    title={name}
                    className={media}
                    image={img || 'noimage'}
                />}

            </Card>
        </Grid>
    )
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);