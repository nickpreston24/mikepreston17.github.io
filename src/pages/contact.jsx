import React from 'react';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import classNames from 'classnames';
import ClipboardJS from 'clipboard';

const styles = theme => ({
    header: {
        color: '#fff'
    },
    paragraph: {
        color: '#c44',
        fontSize: '24'
    },

    projects: {
        color: 'hotpink',
    },

    panel: {
        background: "#fff"
    },
    button: {
        border: '1px solid transparent',
        color: 'red',
        margin: '3px'
    },
    shadow: {
        "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
})

const Contact = (props) => {

    const { classes } = props;
    const { button, header, panel, shadow } = classes;
    const email = "michael.n.preston@gmail.com";

    return (
        <div className='alignLeft'>
            <h1 className={header}>Contact Me!</h1>
            <div className={panel}>
                <ul>
                    <ListItem>Mobile: (817) 565-2372</ListItem>
                    <ListItem>Email: michael.n.preston@gmail.com</ListItem>

                    <Tooltip title="Shoot me an Email!">
                        <Button className={classNames(button, shadow)} href={"mailto:" + email}>
                            <Icon className="far fa-envelope-open" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Let's Connect!">
                        <Button className={classNames(button, shadow)} href="https://www.linkedin.com/in/michael-n-preston/">
                            <Icon className="fab fa-linkedin" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Copy to clipboard">
                        <Button className="btn" data-clipboard-text={email}>
                            <Icon className="far fa-clipboard" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Download my Resume!">
                        <Button download href="/content/Michael Preston - Resume 2019 Full Stack Engineer.docx">
                            <Icon className="fas fa-download" />
                        </Button>
                    </Tooltip>

                </ul>
            </div>
        </div>
    )
};

var clipboard = new ClipboardJS('.btn');
// clipboard.destroy(); //TODO: Use in componentWillUnmount or destructor.

export default withStyles(styles)(Contact);
