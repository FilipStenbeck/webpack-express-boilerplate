import * as types from './actionTypes';

const newMessage = (message) => {
  return {
    type: types.NEW_MESSAGE,
    payload: message
  }
}
const resetMessage = (message) => {
  return {
    type: types.RESET_MESSAGE
  }
}

module.exports = {
  newMessage: newMessage,
  resetMessage: resetMessage
}
