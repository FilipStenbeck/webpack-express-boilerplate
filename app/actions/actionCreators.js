'use strict';

import * as types from './actionTypes';

const newMessage = (message) => {
  return {
    type: types.NEW_MESSAGE,
    payload: message
  };
};

const resetMessage = () => {
  return {
    type: types.RESET_MESSAGE
  };
};

const gamesLoaded = (games) => {
  return {
    type: types.GAMES_LOADED,
    payload: games
  };
};

const loading = () => {
  return {
    type: types.LOADING,
    payload: 'Loading...'
  };
};

const gameInfoLoaded = (info) => {
  return {
    type: types.GAME_INFO_LOADED,
    payload: info
  };
};

module.exports = {
  loading,
  newMessage,
  resetMessage,
  gamesLoaded,
  gameInfoLoaded
};
