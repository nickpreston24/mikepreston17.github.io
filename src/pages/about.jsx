import React from 'react';
import Grid from "@material-ui/core/Grid";
import { withStyles, MuiThemeProvider } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Jumbotron } from 'reactstrap';
import Recommendations from './recommendations';

const styles = theme => ({
    grid: {
        //   padding: theme.spacing.unit * 2,
        margin: "auto",
        position: "relative",
        top: "25 %",
        width: "50 %",
        height: "50 %"
    },
    // toolbar: {
    //     color: "white",
    //     backgroundColor: "#0079c1"
    // },
    card: {
        // "max-width": "700px",
        // "height": "320px"
        //   margin: '40px'
        "align-content": 'center',
        "max-width": "170%",
        "max-height": "250%",
    },
    jumbo: {
        "max-width": "120%",
    }
});

const About = (props) => {

    const { classes } = props;
    const { grid, card, jumbo } = classes;

    return (
        <div className="alignLeft">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg p-3 mb-5 rounded">
                <a className="navbar-brand accent">About Me</a>
            </nav>
            <Jumbotron className={jumbo}>
                <h2>In my spare time I enjoy...</h2>
            </Jumbotron>
            <Grid
                item xs={12}
                className={grid}
            >
                <GridList>
                    <GridListTile cols={1}>
                        <Card className={card}>
                            <CardHeader title="Organic Cooking" />
                            <CardContent>
                                <Typography className={card} component="p">
                                    I learn (self-taught) to cook, whipping up recipes from my imagination and writing the successful (i.e. not burnt) ones down.  My only rule is that all ingredients must be Organic - it all tastes so much better!

                                    Since starting in 2015, I've been known to test out my creations on my family and peers!  My favorite tools is my Instant Pot: anything can be thrown in it and you got a meal.

                                    I'm particular to making sweets, namely ice cream and cookies, but I've been looking to expand into baked goods.
                                </Typography>
                            </CardContent>
                        </Card>
                        <br />
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={card}>
                            <CardHeader title="Martial Arts" />
                            <CardContent>
                                <Typography component="p">
                                    My interest in martial arts stemmed from seeing others perform when I was a kid - I'd always wanted to be able to Karate chop a block in half.  So far, I've managed to do a decent job on boards whereas concrete HURTS!

                                    I've done quite a bit in my first 20 or so years.  In college I joined the Texas Blackbelt Academy's Taekwondo class and the Fencing Club.  Training to parry, riposte and jab enhanced my tone and wits while kicking shields improved my flexibility.

                                    In additon to my belts in Taekwondo, in 2019 I achieved an orange belt in Krav Maga.

                                </Typography>
                            </CardContent>
                        </Card>
                    </GridListTile>
                </GridList>
            </Grid>

            <br />

            <Recommendations />
        </div>
    );
}

export default withStyles(styles)(About);
