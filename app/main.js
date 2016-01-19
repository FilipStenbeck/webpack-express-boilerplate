import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { createStore } from 'redux'
import { appReducer } from './reducers/appReducer'

const targetEl = document.getElementById('root')

ReactDOM.render(
    <App message="Loading..."/>, targetEl
);
