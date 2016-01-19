'use strict';

import React from 'react';
import { render } from 'react-dom'
import Boardgames from './Boardgames.js';
import { createStore } from 'redux'
import styles from './App.css';
import { appReducer } from './reducers/appReducer';
import { newMessage, resetMessage } from './actions/actionCreators';

const store = createStore(appReducer);

export default class App extends React.Component {

  getStore() {
    return store;
  }
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState())
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
      <div className={styles.app}>
        <h2>{this.state.message}</h2>
        <button onClick={this.onReset}>Reset message</button>
        <input type="text" onChange={this.handleChange} />
        <Boardgames></Boardgames>
      </div>
    );
  }
}
