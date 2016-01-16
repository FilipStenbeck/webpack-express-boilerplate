import expect from 'expect'
import { NEW_MESSAGE, RESET_MESSAGE } from '../../app/actions/actionTypes';
import { appReducer } from '../../app/reducers/appReducer';

describe('appReducer', () => {
  it('should set state to initial if no state', () => {
    let expectedState = {
      message: 'foobar'
    }
    let state = appReducer({}, {type: RESET_MESSAGE})

    expect(state).toEqual(expectedState);
  });

  it('should update state with a new message', () => {
    let expectedState = {
      message: 'erp derp'
    }
    let state = appReducer({}, {type: NEW_MESSAGE, payload: 'erp derp'})

    expect(state).toEqual(expectedState);
  });

  it('should return current state if no action types atches', () => {
    let expectedState = {
      message: 'erp derp'
    }
    let state = appReducer(expectedState, {type: 'FOO_BAR'})
  
    expect(state).toEqual(expectedState);
  });
})
