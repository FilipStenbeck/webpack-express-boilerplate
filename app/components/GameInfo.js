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
       <a href={this.props.game.link} target="parent"><img src={this.props.game.thumbnail} title={this.props.game.name}></img></a>
      </p>
      <p>
       {this.props.game.description}
       </p>
    </div>
    );
  }
}
