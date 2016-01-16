import expect from 'expect'
import * as actions from '../../app/actions/actionCreators'
import * as types from '../../app/actions/ActionTypes'

describe('actions', () => {
  it('should create an action to set a new message', () => {
    const payload = 'erp derp'
    const expectedAction = {
      type: types.NEW_MESSAGE,
      payload
    }
    expect(actions.newMessage(payload)).toEqual(expectedAction)
  });

  it('should reset an action', () => {
    const expectedAction = {
      type: types.RESET_MESSAGE
    }
    expect(actions.resetMessage()).toEqual(expectedAction)
  });
})
