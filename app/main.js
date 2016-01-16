import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

const targetEl = document.getElementById('root')

ReactDOM.render(
    <App message="Foo bar"/>, targetEl
);
