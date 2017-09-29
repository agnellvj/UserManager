/*
 *
 * UsersPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_USER,
  UPDATE_USER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}
