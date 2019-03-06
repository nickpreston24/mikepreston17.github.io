import React, { Component } from 'react';
console.log('i am loaded')

class Projects extends Component {
	render() {
		var projects = [
            { href: 'https://mikepreston17.github.io/mem-berries/', name: 'Memberries' },
			{ href: 'https://mikepreston17.github.io/GifTastic/', name: 'Gif-Tastic' },
			{ href: 'https://github.com/MikePreston17/DynamicXml', name: 'XML To POCOs' },
			{ href: 'https://github.com/MikePreston17/DesignPatterns', name: 'Design Patterns' },
			{ href: 'https://mikepreston17.github.io/RPS-Multiplayer/', name: 'RPS-Multiplayer' },
			{ href: 'https://mikepreston17.github.io/LocoMoment/', name: 'Loco-Moment' },
			{ href: 'https://github.com/MikePreston17/liri-node-app/', name: 'LIRI Bot' },
			{ href: 'https://github.com/MikePreston17/bamazon/', name: 'Bamazon' },
			{ href: 'https://agile-woodland-60817.herokuapp.com/', name: 'Burger' },
            { href: 'https://desolate-falls-20937.herokuapp.com/', name: 'Friend Finder' },
            { href: 'https://git.heroku.com/ancient-scrubland-60372.git', name: 'soup-store'}
		];

		return (
            <ul>
                <h2 style={h2Style}>Projects: </h2>
				{projects.map(project => (
					<li>
						<a href={project.href}>{project.name}</a>
					</li>
				))}
			</ul>
		);
    }    
}
const h2Style = {
    color: "#fff"
}

export default Projects;