import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const projects = require('./data/projects.json');

/** Main Render */
ReactDOM.render(
  <Router>
    <App projects={projects} />
  </Router>,
  document.getElementById('root')
);

/**  Slider Animations */
const navButton = document.querySelector('.navigation-button');
const navMenu = document.querySelector('.navigation-menu');
const win = window;

function openMenu(event) {
  navButton.classList.toggle('active');
  navMenu.classList.toggle('active');

  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu() {
  if (navButton.classList.contains('active')) {
    navButton.classList.remove('active');
    navMenu.classList.remove('active');
    // TODO: (optional) Hide Nav Menu, unhide when transition is away.
  }
}

navButton.addEventListener('click', openMenu, false);
// TODO: Add a button the the navbar for closing, instead of just anywhere in the window!
win.addEventListener('click', closeMenu, false);
