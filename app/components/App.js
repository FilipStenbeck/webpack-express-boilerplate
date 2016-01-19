'use strict';

import React from 'react';
import { render } from 'react-dom'
import Boardgames from './Boardgames.js';
import { createStore } from 'redux'
import styles from '../App.css';
import { appReducer } from '../reducers/appReducer';
import { newMessage, resetMessage } from '../actions/actionCreators';

const storeUtil = require('../util/store');

const store = storeUtil.getStore(appReducer);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
      var temp = store.getState();

      console.log(temp);
    });
  }

  componentDidMount() {
    store.dispatch(newMessage(this.props.message));
  }

  onReset = function () {
    store.dispatch(resetMessage());
  };

  handleChange = function (event) {
    store.dispatch(newMessage(event.target.value));
  };

  render() {
    return (
      <div>
        <div className="well well-lg">
        <strong>{this.state.message}</strong>
        <div className={styles.controls}>
          <input type="text" className={styles.controlsitems} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={this.onReset}>Clear</button>
        </div>
      </div>
      <div className="row">
           <div className="col-md-6 .col-lg-6">
             <Boardgames></Boardgames>
          </div>
          <div className="col-md-6 .col-lg-6">
            <p>
            <img src={this.state.info.thumbnail}></img>
          </p>
            {this.state.info.description}
         </div>
      </div>
      </div>
    );
  }
}
