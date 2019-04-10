import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';

var projects = projects = require('./data/projects.json');

/** Project Pinging */
function pingAll (urls) {
    if(!urls || urls.length == 0)
        return;

    axios.all([
        urls.map(url=>axios.get(url))
    ])
    .catch(console.error)
}

pingAll(projects.map(p=>p.url));

/** Main Render */
ReactDOM.render(
  <Router>
    <App projects={projects} />
  </Router>,
  document.getElementById('root')
);

/**  Slider Animations */
var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;

function openMenu(event) {
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

    event.preventDefault();
    event.stopImmediatePropagation();
}

function closeMenu(event) {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
        //TODO: (optional) Hide Nav Menu, unhide when transition is away.
    }
}

navButton.addEventListener('click', openMenu, false);
win.addEventListener('click', closeMenu, false);