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
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  componentDidMount() {
    store.dispatch({type: 'NEW_MESSAGE', payload: this.props.message})
  }

  onReset = function () {
    store.dispatch({type: 'RESET_MESSAGE', payload: 'erp derp'})
  };

  handleChange = function (event) {
    store.dispatch({type: 'NEW_MESSAGE', payload: event.target.value})
  };

  render() {
    return (
      <div className={styles.app}>
        <h2>{this.state.message}</h2>
        <button onClick={this.onReset}>Reset message</button>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}
