import { createSelector } from 'reselect';

/**
 * Direct selector to the usersPage state domain
 */
const selectUsersPageDomain = (state) => state.get('usersPage');

/**
 * Other specific selectors
 */

const makeUserList = () => createSelector(
  selectUsersPageDomain,
  (substate) => substate.get('users')
);

/**
 * Default selector used by UsersPage
 */

const makeSelectUsersPage = () => createSelector(
  selectUsersPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectUsersPage;
export {
  selectUsersPageDomain,
  makeUserList,
};
