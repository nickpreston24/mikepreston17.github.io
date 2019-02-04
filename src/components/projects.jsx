import React, { Component } from 'react';

class Projects extends Component {
	render() {
		var links = [
			{ href: 'https://mikepreston17.github.io/GifTastic/', name: 'Gif-Tastic' },
			{ href: 'https://github.com/MikePreston17/DynamicXml', name: 'XML To POCOs' },
			{ href: 'https://github.com/MikePreston17/DesignPatterns', name: 'Design Patterns' },
			{ href: 'https://mikepreston17.github.io/RPS-Multiplayer/', name: 'RPS-Multiplayer' },
			{ href: 'https://mikepreston17.github.io/LocoMoment/', name: 'Loco-Moment' },
			{ href: 'https://github.com/MikePreston17/liri-node-app/', name: 'LIRI Bot' },
			{ href: 'https://github.com/MikePreston17/bamazon/', name: 'Bamazon' },
			{ href: 'https://agile-woodland-60817.herokuapp.com/', name: 'Burger' },
			{ href: 'https://desolate-falls-20937.herokuapp.com/', name: 'Friend Finder' },
		];

		return (
			<ul>
				{links.map(link => (
					<li>
						<a href={link.href}>{link.name}</a>
					</li>
				))}
			</ul>
		);
	}
}

export default Projects;
/**
 * 
 * <ul>
                    href:"https://mikepreston17.github.io/GifTastic/", name: 'Gif-Tastic
                    href:"https://github.com/MikePreston17/DesignPatterns", name: 'Design Patterns
                    href:"https://github.com/MikePreston17/DynamicXml", name: 'XML To POCOs
                    href:"https://mikepreston17.github.io/RPS-Multiplayer/" , name: 'RPS-Multiplayer
                    href:"https://mikepreston17.github.io/LocoMoment/" , name: 'Loco-Moment
                    href:"https://github.com/MikePreston17/liri-node-app/" , name: 'LIRI Bot
                    href:"https://github.com/MikePreston17/bamazon/" , name: 'Bamazon
                    href:"https://agile-woodland-60817.herokuapp.com/" , name: 'Burger
                    href:"https://desolate-falls-20937.herokuapp.com/", name: 'Friend Finder
                </ul>
 * 
 */
