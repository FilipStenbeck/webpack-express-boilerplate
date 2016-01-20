'use strict';

import React from 'react';
import { render } from 'react-dom'
import styles from '../App.css';
import { appReducer } from '../reducers/appReducer';
import { gameInfoLoaded, newMessage, loading } from '../actions/actionCreators';

var utils = require('../util/utils');

const request = require('browser-request');
const he = require('he');
const storeUtil = require('../util/store');
const store = storeUtil.getStore(appReducer);

export default class GameItem extends React.Component {

  constructor(props) {
    super(props);
  }
  getGameInfo(event) {
    store.dispatch(loading());

    function cleanGameData(data) {
      return Object.assign({}, data, {
        description: he.decode(data.description),
        link: utils.getUrlFromTag(data.link)
      });
    }

    function scrollToTop(scrollDuration) {
      var scrollStep = -window.scrollY / (scrollDuration / 15);
      var scrollInterval = setInterval(function() {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
    }

    scrollToTop(500);
    request('http://mini-geek-service.appspot.com/gameinfo?id=' + event.target.id + '&alt=json', function(er, response, body) {
      if (er) {
        throw er;
      }
      let game = cleanGameData(JSON.parse(body).result[0]);
      store.dispatch(newMessage(game.name));
      store.dispatch(gameInfoLoaded(game));
    });
  }

  render() {
    return (
      <div>
        <button className={styles.fancybutton} id={this.props.id} name={this.props.name} onClick={this.getGameInfo} href={'#/' + this.props.id}>{this.props.name}</button>
      </div>
    );
  }
}
