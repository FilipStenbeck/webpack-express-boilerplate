import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from 'redux'
import { appReducer } from './reducers/appReducer'

const targetEl = document.getElementById('root')

ReactDOM.render(
    <App message="foo bar"/>, targetEl
);
