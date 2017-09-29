/*
 *
 * UsersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from './constants';

const initialState = fromJS({ last_id: 0, users: [] });

function usersPageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      const new_user = { ...action.user, id: state.get('last_id') }
      const new_state = state.set('last_id', state.get('last_id') + 1);
      return new_state.update('users', u => u.push(fromJS(new_user)));
    case DELETE_USER:
      return state.deleteIn(
        ['users', state.get('users').findIndex(u => u.get('id') === action.userId)]
      );
    case UPDATE_USER:
      return state.setIn(
        ['users', state.get('users').findIndex(u => u.get('id') === action.user.id)],
        fromJS(action.user)
      );
    default:
      return state;
  }
}

export default usersPageReducer;
