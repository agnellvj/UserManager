/**
 *
 * UsersPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Col, Glyphicon, Grid, PageHeader, Row } from 'react-bootstrap';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import { makeUserList } from './selectors';

import { createUser, updateUser } from './actions';
import NewUser from 'components/NewUser';
import UserList from 'components/UserList';

export class UsersPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PageHeader>
          <Grid fluid>
            <Row>
              <Col md={3} mdOffset={1}>
                User Manager
              </Col>
              <Col md={3} mdOffset={5}>
                <NewUser createUser={this.props.onCreateUser} />
              </Col>
            </Row>
          </Grid>
        </PageHeader>
        <Grid fluid>
          <Row>
            <Col md={9} mdOffset={1}>
              <UserList users={this.props.users} updateUser={this.props.onUpdateUser} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

UsersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onCreateUser: PropTypes.func,
  onUpdateUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: makeUserList(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreateUser: (user) => dispatch(createUser(user)),
    onUpdateUser: (user) => dispatch(updateUser(user)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'usersPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(UsersPage);
