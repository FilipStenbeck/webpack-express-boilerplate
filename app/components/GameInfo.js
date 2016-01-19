'use strict';

import React from 'react';
import { render } from 'react-dom'

export default class GameInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
      <p>
       <img src={this.props.game.thumbnail} title={this.props.game.name}></img>
      </p>
      <p>
       {this.props.game.description}
       </p>
    </div>
    );
  }
}
