'use strict';

import React from 'react';
import { render } from 'react-dom'
import Boardgames from './Boardgames.js';
import GameInfo from './GameInfo.js';
import { createStore } from 'redux'
import styles from '../App.css';
import { appReducer } from '../reducers/appReducer';
import { newMessage } from '../actions/actionCreators';

const storeUtil = require('../util/store');

const store = storeUtil.getStore(appReducer);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    store.dispatch(newMessage(this.props.message));
  }

  render() {
    return (
      <div>
        <div className="well well-lg header">
        <strong>{this.state.message}</strong>
      </div>

      <div className="row">
           <div className="col-md-5 .col-lg-5">
             <Boardgames></Boardgames>
          </div>
          <div className="col-md-7 .col-lg-7">
            <GameInfo game={this.state.info}></GameInfo>
         </div>
      </div>
      </div>
    );
  }
}
