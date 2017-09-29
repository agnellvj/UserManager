/**
*
* UserList
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button, ButtonToolbar, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import EditUser from 'components/EditUser';

class UserList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const userListView = this.props.users.map(user => (
      <ListGroupItem key={user.get('id')}>
        <Row>
          <Col md={3}>{user.get('first_name')}</Col>
          <Col md={3}>{user.get('last_name')}</Col>
          <Col md={3}>{user.get('address')}</Col>
          <Col md={3}>
            <ButtonToolbar>
              <EditUser user={user} updateUser={this.props.updateUser} />
              <Button bsStyle="danger">Delete</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </ListGroupItem>
    ));

    return (
      <ListGroup>
        {userListView}
      </ListGroup>
    );
  }
}

UserList.propTypes = {

};

export default UserList;
