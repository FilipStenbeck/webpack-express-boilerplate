'use strict';
import * as types from '../actions/actionTypes';

const initialState = {
  message: '',
  games: [],
  info: {
    thumbnail: null,
    description: ''
  }
};

let appReducer = function appReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {

  case types.LOADING: {
    return Object.assign({}, state, {
      message: action.payload
    });
  }

  case types.NEW_MESSAGE: {
    return Object.assign({}, state, {
      message: action.payload
    });
  }

  case types.GAMES_LOADED: {
    return Object.assign({}, state, {
      message: 'Popular games',
      games: action.payload
    });
  }

  case types.GAME_INFO_LOADED: {
    return Object.assign({}, state, {
      info: action.payload
    });
  }
  default: {
    return Object.assign({}, state);
  }
  }
};

module.exports = {
  appReducer
};
