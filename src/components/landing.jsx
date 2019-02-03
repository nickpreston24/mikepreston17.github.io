import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div>
				<h1>Full Stack Developer</h1>
				<h2>Michael Preston</h2>
                {/* TODO (Temporary) Move this list to the Porfolio page once site is constructed. */}
                <ul>
                    <li><a target="_blank" href="https://mikepreston17.github.io/GifTastic/">Gif-Tastic</a></li>
                    <li><a target="_blank" href="https://github.com/MikePreston17/DesignPatterns">Design Patterns</a></li>
                    <li><a target="_blank" href="https://github.com/MikePreston17/DynamicXml">XML To POCOs</a></li>
                    <li><a target="_blank" href="https://mikepreston17.github.io/RPS-Multiplayer/" target="_blank">RPS-Multiplayer</a></li>
                    <li><a target="_blank" href="https://mikepreston17.github.io/LocoMoment/" target="_blank">Loco-Moment</a></li>
                    <li><a target="_blank" href="https://github.com/MikePreston17/liri-node-app/" target="_blank">LIRI
                                Bot</a></li>
                    <li><a target="_blank" href="https://github.com/MikePreston17/bamazon/" target="_blank">Bamazon</a></li>
                    <li><a target="_blank" href="https://agile-woodland-60817.herokuapp.com/" target="_blank">Burger</a></li>
                    <li><a target="_blank" href="https://desolate-falls-20937.herokuapp.com/">Friend Finder</a></li>
                </ul>
			</div>
		);
	}
}

export default Landing;
