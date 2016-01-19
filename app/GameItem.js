'use strict';

import React from 'react';
import { render } from 'react-dom'
import styles from './App.css';

const request = require('browser-request');

export default class GameItem extends React.Component {

  constructor(props) {
    super(props);
  }

  getGameInfo(event) {
    request('http://mini-geek-service.appspot.com/gameinfo?id=' + event.target.id + '&alt=json', function(er, response, body) {
      if (er) {
        throw er;
      }
      console.log(body);
    });
  }

  render() {
    return (
      <div>
        <a id={this.props.id} onClick={this.getGameInfo} href={'#/' + this.props.id}>{this.props.name}</a>
      </div>
    );
  }
}
