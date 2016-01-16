'use strict';

import React from 'react';
import { render } from 'react-dom'
import styles from './App.css';
import { createStore } from 'redux'
import { appReducer } from './appReducer'

const store = createStore(appReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: props.message};
    store.subscribe(() => {
      this.setState(store.getState())
    }
    );
  }

  onNewMessage = function () {
    store.dispatch({type: 'NEW_MESSAGE', payload: 'Erp derp'})
  };

  render() {
    return (
      <div className={styles.app}>
        <h2>{this.state.message}</h2>
        <button onClick={this.onNewMessage}>New message</button>
      </div>
    );
  }
}
