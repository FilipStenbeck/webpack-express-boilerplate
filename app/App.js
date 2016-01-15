import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { appReducer } from './appReducer'
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        {this.state.message} bar
      </div>
    );
  }
}
