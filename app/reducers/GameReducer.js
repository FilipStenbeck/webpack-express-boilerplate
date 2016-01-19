'use strict';
import * as types from '../actions/actionTypes';

const initialState = {
  message: '',
  games: []
};

let gameReducer = function gameReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {

  case types.GAMES_LOADED: {
    return Object.assign({}, state, {
      message: 'Popular games',
      games: action.payload
    })
  }
  default: {
    return Object.assign({}, state, {
      message: state.message,
      games: state.games
    });
  }
  }
}

module.exports = {
  gameReducer
}
