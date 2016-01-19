import expect from 'expect'
import { NEW_MESSAGE, RESET_MESSAGE, LOADING, GAMES_LOADED } from '../../app/actions/actionTypes';
import { appReducer } from '../../app/reducers/appReducer';

describe('appReducer', () => {
  it('should update state with a new message', () => {
    let expectedState = {
      message: 'erp derp'
    };
    let state = appReducer({}, {type: NEW_MESSAGE, payload: 'erp derp'})

    expect(state.message).toEqual(expectedState.message);
  });

  it('should update message when loading', () => {
    let expectedState = {
      message: 'Loading...'
    };
    let state = appReducer({}, {type: LOADING, payload: 'Loading...'});

    expect(state.message).toEqual(expectedState.message);
  });

  it('should update state when games is loaded', () => {
    let expectedState = {
      message: 'Popular games',
      games: ['erp', 'derp']
    };
    let state = appReducer({}, {type: GAMES_LOADED, payload: ['erp', 'derp']});

    expect(state.message).toEqual(expectedState.message);
    expect(state.games).toEqual(expectedState.games);
  });

  it('should return current state if no action types atches', () => {
    let expectedState = {
      message: 'erp derp'
    };
    let state = appReducer(expectedState, {type: 'FOO_BAR'});
    expect(state).toEqual(expectedState);
  });
});
