import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import StaticResume from './static'
import { getByName } from '../../data/airtable'

const styles = theme => ({
    header: {
        color: '#fff'
    },

    paragraph: {
        color: '#fff',
        fontSize: '24'
    },

    creations: {
        color: '#fff',
    },

    experience: {
        color: '#fff',
    },

    panel: {
        background: '#111',
        float: "left",
    },
    button: {
        border: '1px solid transparent',
        color: '#f20c4a',
        margin: '3px',
        background: 'paper',
        "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    },
    alignLeft: {
        color: 'white',
        boxSizing: 'border-box',
        padding: 20,
        maxwidth: 480,
        zIndex: 1,
        display: 'flex',
        flexFlow: 'column nowrap',
        float: 'left',
        justifyContent: 'center',
        // transition: 'opacity 0.3s linear 0.0s !important',
        // 'div.active > &': {
        //     opacity: 1,
        //     transition: 'opacity 0.5s linear 0.5s !important',
        // },
        // '& > * ': { margin: 20 },
        // '& button': { borderRadius: 24, borderWidth: 2, },
    },
})

class Resume extends Component {

    resume = {};

    constructor(props) {
        super(props);
        const { classes } = props;
        const { button } = classes;
    }

    loadResume() {
        var promise = getByName('Test resume');
        console.log('loadresume=>promise: ', promise);
        return promise;
    }

    componentDidMount() {

        this.setState({ loading: 'true' });
        this.loadResume()
            .then((data) => {
                this.setState({
                    resume: data,
                    loading: 'false'
                });
            });
    }

    render() {
        this.resume = !!this.state ? this.state.resume : null;
        return (
            <div className="container">
                <Button
                    download href="/content/Michael Preston - Resume 2019 Full Stack Engineer.docx">
                    <Icon className="fas fa-download" />
                </Button>                
                <StaticResume resume={this.resume} {...this.props} />
            </div>
        )
    }
}

export default withStyles(styles)(Resume);
