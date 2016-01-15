'use strict';

const initialState = {
  message: 'foobar'
};

let appReducer = function appReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {

  case 'NEW_MESSAGE': {
    return Object.assign({}, state, {
      message: action.payload
    });
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
