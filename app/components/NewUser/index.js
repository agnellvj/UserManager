/**
*
* NewUser
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button, ButtonGroup, ControlLabel, FormControl, FormGroup, Input, Modal } from 'react-bootstrap';

class NewUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.user = {};

    this.state = {
      showModal: false,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
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

  handleCreateUser(e) {
    this.props.createUser(this.user);
    this.close();
  }

  render() {
    return (
      <form>
        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          Add User
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formBasicText">
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="First Name"
                onChange={(e) => this.handleChange(e, 'first_name')}
              />
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                onChange={(e) => this.handleChange(e, 'last_name')}
              />
              <ControlLabel>Address</ControlLabel>
              <FormControl
                type="text"
                placeholder="Address"
                onChange={(e) => this.handleChange(e, 'address')}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleCreateUser}>Create</Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

NewUser.propTypes = {

};

export default NewUser;
