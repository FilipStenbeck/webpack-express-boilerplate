import { NEW_MESSAGE, RESET_MESSAGE } from './actionTypes';

const newMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    payload: message
  }
}
const resetMessage = (message) => {
  return {
    type: RESET_MESSAGE
  }
}

module.exports = {
  newMessage: newMessage,
  resetMessage: resetMessage
}
