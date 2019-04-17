import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

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
        "max-width": "700px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {
        color: 'white',
        backgroundColor: "#f20c4a"
    }
});

const Project = (props) => {

    const { classes } = props;
    const { grid, actions, card, toolbar } = classes;
    const { name, img, description, url, tech } = props;

    console.log('img: ', img || "", 'name', name, 'desc:', description, 'url:', url);
    console.log('tech:', tech)

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
                <CardMedia
                    title={name}
                    image={"public/images/Me.jpg" || 'noimage'}
                />
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
                    <Button
                        variant="contained"
                        size="small"
                        href={url}
                        className={toolbar}
                    >
                        Play
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

Project.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);