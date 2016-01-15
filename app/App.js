import React from 'react';
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
