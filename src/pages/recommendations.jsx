import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { Jumbotron } from 'reactstrap';

const styles = theme => ({
    recomendation: {
        color: '#f20c4a',
        "font-size": '120%',
        background: "white",
        "font-weight": 'bold',
    },
    jumbo: {
        "max-width": "120%",
    },
    menu: {
        color: '#f20c4a'
    }
})

const Recommendations = (props) => {

    const { recomendation, header, jumbo } = props.classes;
    return (
        <div>
            <Jumbotron className={jumbo}>
                <h2>Recommendations:</h2>
            </Jumbotron>
            <Typography component="i" className={recomendation}>
                "Michael is an extremely knowledgeable developer, and a strong team asset. He is quick to be generous to share his knowledge, dive into troubleshooting, and goes above and beyond to research, ask questions, and understand concepts deeply. Michael is a creative problem-solver, and designs solutions that add clarity and grace to the problems or goals being targeted." - Andrasta Seatts
                <Button href="https://www.linkedin.com/in/andrasta-seatts-a21ab4a5/ ">
                    <Icon className="fab fa-linkedin"></Icon>
                </Button>
            </Typography>
            <br />
            <Typography component="i" className={recomendation}>
                "Michael is a highly motivated programmer and will go above and beyond to get the best possible project delivered. His input was invaluable and I learned quite a bit from his example. He would be a valuable asset to any team, and I would consider myself very lucky to be on the same team as him in the future." - Daniel Reynolds
                <Button href="https://www.linkedin.com/in/daniel-s-reynolds/">
                    <Icon className="fab fa-linkedin"></Icon>
                </Button>
            </Typography>
        </div>
    );
}

export default withStyles(styles)(Recommendations);