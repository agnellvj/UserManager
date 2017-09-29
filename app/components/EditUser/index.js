/**
*
* EditUser
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button, ButtonGroup, ControlLabel, FormControl, FormGroup, Input, Modal } from 'react-bootstrap';

class EditUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.user = {};

    this.state = {
      showModal: false,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e, key) {
    this.user[key] = e.target.value;
  }

  handleUpdateUser(e) {
    const updated_user = Object.assign(this.props.user.toJS(), { ...this.user });
    this.props.updateUser(updated_user);
    this.close();
  }

  render() {
    const user = this.props.user.toJS();

    return (
      <form>
        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          Edit User
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formBasicText">
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="First Name"
                defaultValue={user.first_name}
                onChange={(e) => this.handleChange(e, 'first_name')}
              />
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                defaultValue={user.last_name}
                onChange={(e) => this.handleChange(e, 'last_name')}
              />
              <ControlLabel>Address</ControlLabel>
              <FormControl
                type="text"
                placeholder="Address"
                defaultValue={user.address}
                onChange={(e) => this.handleChange(e, 'address')}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleUpdateUser}>Update</Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

EditUser.propTypes = {

};

export default EditUser;
