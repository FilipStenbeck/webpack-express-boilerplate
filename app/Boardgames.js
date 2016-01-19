'use strict';

const request = require('browser-request');
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import styles from './App.css';
import App from './App.js';
import GameItem from './GameItem.js';

import {loading, gamesLoaded } from './actions/actionCreators';
import { appReducer } from './reducers/appReducer';

const storeUtil = require('./util/store');
const store = storeUtil.getStore(appReducer);

const triggerLoaded = function(result) {
  let games = JSON.parse(result);
  store.dispatch(gamesLoaded(games.result));
}

export default class Boardgames extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  getboardgames(callback) {
    store.dispatch(loading());
    request('http://mini-geek-service.appspot.com/hotgames?alt=json', function(er, response, body) {
      if (er) {
        throw er;
      }
      callback(body);
    });
  }

  componentDidMount() {
    this.getboardgames(triggerLoaded);
  }

  render() {
    return (
    <div>
      <ul>
        {this.state.games.map((game) => <li className={styles.games} key={game.id}><GameItem id={game.id} name={game.name}/></li>)}
      </ul>
    </div>
    );
  }
}
