'use strict';

import React from 'react';
import { render } from 'react-dom'
import styles from './App.css';
import { appReducer } from './reducers/appReducer';
import { gameInfoLoaded, newMessage, loading } from './actions/actionCreators';

const storeUtil = require('./util/store');

const store = storeUtil.getStore(appReducer);

const request = require('browser-request');

export default class GameItem extends React.Component {

  constructor(props) {
    super(props);
  }

  getGameInfo(event) {
    store.dispatch(loading());
    request('http://mini-geek-service.appspot.com/gameinfo?id=' + event.target.id + '&alt=json', function(er, response, body) {
      if (er) {
        throw er;
      }
      let game = JSON.parse(body);
      store.dispatch(newMessage(game.result[0].name));
      store.dispatch(gameInfoLoaded(game.result[0]));
    });
  }

  render() {
    return (
      <div>
        <a id={this.props.id} name={this.props.name} onClick={this.getGameInfo} href={'#/' + this.props.id}>{this.props.name}</a>
      </div>
    );
  }
}
