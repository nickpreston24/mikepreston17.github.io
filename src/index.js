import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


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