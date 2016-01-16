'use strict';
import * as types from '../actions/actionTypes';

const initialState = {
  message: 'foobar'
};

let appReducer = function appReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {

  case types.NEW_MESSAGE: {
    return Object.assign({}, state, {
      message: action.payload
    });
  }

  case types.RESET_MESSAGE: {
    return Object.assign({}, initialState);
  }

  default: {
    return Object.assign({}, state, {
      message: state.message
    });
  }
  }
}

module.exports = {
  appReducer
}
