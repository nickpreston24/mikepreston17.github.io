import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  });

const ProjectCard = (props) => {

    const {classes} = props;
    const {name, img, description, link} = props;
    const {grid, actions, card, toolbar} = classes;

    return (
        <Grid
            item xs={10}
            className={grid}
            >
            <Card className={card}>
                <CardHeader
                    title={name}
                    // subheader="test sub"
                    />
                <CardContent>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={actions} disableActionSpacing>
                    <Button
                        variant="contained"
                        size="small"
                        href={link}
                        className={toolbar}
                    >
                        Play
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);