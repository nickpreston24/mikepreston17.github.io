import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import IconButton from "@material-ui/core/IconButton";
// import LocationOn from "@material-ui/icons/LocationOn";
// import ViewList from "@material-ui/icons/ViewList";
// import ShareIcon from "@material-ui/icons/Share";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

import {Link} from 'react-router-dom';
import PropTypes from "prop-types";


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
      color: blue,
      "max-width": "700px"
    },
    // root: {
    //   flexGrow: 1
    // },
    // flex: {
    //   flexGrow: 1
    // },
    // menuButton: {
    //   marginLeft: -12,
    //   marginRight: 20
    // },
    // actions: {
    //   display: "flex"
    // },
    // expand: {
    //   transform: "rotate(0deg)",
    //   transition: theme.transitions.create("transform", {
    //     duration: theme.transitions.duration.shortest
    //   }),
    //   marginLeft: "auto",
    //   [theme.breakpoints.up("sm")]: {
    //     marginRight: -8
    //   }
    // },
    // expandOpen: {
    //   transform: "rotate(180deg)"
    // },
    // avatar: {
    //   backgroundColor: blue[500]
    // },
    // anchorNoStyle: {
    //   "text-decoration": "inherit",
    //   color: "inherit"
    // }
  });

const ProjectCard = (props) => {
    const {classes} = props;
    const {name, img, description, link} = props;

    return (
        <Grid
            item xs={10}
            className={classes.grid}
            >
            <Card className={classes.card}>
                <CardHeader
                    title={name}
                    // subheader="test sub"
                    />
                <CardContent>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>

                    {/* <Button aria-label="Location">
                    <LocationOn color="disabled" />
                    <Typography variant="caption" gutterBottom align="center">
                        New South Wales/ACT/Queanbeyan
                    </Typography>
                    </Button> */}
                    {/* <Button aria-label="Share">
                    <ViewList color="disabled" />
                    <Typography variant="caption" gutterBottom align="center">
                        Human Resources
                    </Typography>
                    </Button> */}
                    {/* <IconButton aria-label="Share">
                    </IconButton> */}
                    <div>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.toolbar}
                        >
                            <a target="_blank" href={link}>
                                Play
                            </a>
                        </Button>
                    </div>
                </CardActions>

            </Card>
        </Grid>
    )
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);