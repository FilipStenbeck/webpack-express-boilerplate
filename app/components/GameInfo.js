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
       <a href="http://boardgamegeek.com/boardgame/188834" target="_blank">
          <img src={this.props.game.thumbnail} title={this.props.game.name}></img>
       </a>
     </p>
       {this.props.game.description}
    </div>
    );
  }
}
