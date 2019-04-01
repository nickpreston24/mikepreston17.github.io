import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
// import { Button } from '@material-ui/core/Button';
// const http = require('http');
import axios from 'axios';


class Projects extends Component {

    projects = []

    // TODO: Load the projects list from your html or the first running index.js, where possible for reduced ping-up time.
    // Ping your projects
    pingAll = (urls) => {
        if(!urls || urls.length == 0)
            return;

        // urls.forEach(url=>http.get(url).on('error', err=> console.error(err)));
        // urls.forEach(url=>axios.get(url).catch(console.error));
        axios.all([
            urls.map(url=>axios.get(url))
        ])
        .catch(console.error)
    }

    componentWillMount() {
        console.log('mounting...')
        this.projects = require('./projects.json');

        this.pingAll(this.projects.map(p=>p.url));
    }

	render() {
		return (
            <div style={{zIndex: -2}}>
            <ul>
                <h2 style={h2Style}>Projects: </h2>
				{this.projects.map(project => (
                    <DemoCard img={"../images/" + project.img} description={project.description} key={project.name} name={project.name} link={project.href} />

				))}
			</ul>
            </div>
		);
    }
}

const h2Style = {
    color: "#fff",
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // align: 'center',
    // float: 'center'
}
// const url = './images/organic-blueberries.jpg'
const DemoCard = (props) => (
    <Card shadow={0} style={{width: '512px', margin: 'auto', zIndex: -2}}>

    {/* {console.log(props)} */}
        {
            props.img ?
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/640/360) center / cover' }}>{props.name}</CardTitle> :
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{props.name}</CardTitle>
        }
        {
            props.description ?
            <CardText style={{color: '#f20c4a'}}>{props.description}</CardText>:
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
        }

        <CardActions border>
            {/* {console.log('link: ', props.link)} */}
            <Button className="mdl-button" href={props.link} target="_blank" colored>View it!</Button>
            {/* //<li><a href={project.href}>{project.name}</a></li> */}
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            {/* <IconButton name="share" /> */}
        </CardMenu>
    </Card>
)



export default Projects;