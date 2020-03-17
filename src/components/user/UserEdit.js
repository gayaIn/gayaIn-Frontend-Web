import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { editUser } from '../redux/actions/user';

class UserEdit extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    alamat: '',
    provinsi: '',
    kota: '',
    status: '',
  };
  componentWillReceiveProps({ user }) {
    this.onSetValue(user);
  }
  onSetValue = user => {
    this.setState({
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password,
      alamat: user.alamat,
      provinsi: user.provinsi,
      kota: user.kota,
      status: user.status,
    });
  };
  onChange = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    const userId = this.props.user.id;
    await this.props.dispatch(editUser(userId, this.state));
    await this.props.onHide();
  };
  render() {
    const { show, onHide } = this.props;
    return (
      <Modal show={show} onHide={onHide} variant='lg'>
        <Modal.Header>
          <p>Add Book</p>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Enter name'
                name='name'
                onChange={this.onChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='username'
                placeholder='Enter username'
                onChange={this.onChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='Enter password'
                name='password'
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Enter address'
                name='alamat'
                onChange={this.onChange}
                value={this.state.username}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>Province</Form.Label>
              <Form.Control
                as='select'
                name='provinsi'
                onChange={this.onChange}
              >
                <option value='jakarta'>jakarta</option>
                <option value='bogor'>Pc</option>
                <option value={3}>Smartwatch</option>
                <option value={4}>Camera</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>City</Form.Label>
              <Form.Control as='select' name='kota' onChange={this.onChange}>
                <option onChange={this.onChange} value={'bogor'}>
                  jakarta
                </option>
                <option value={2}>Pc</option>
                <option value={3}>Smartwatch</option>
                <option value={4}>Camera</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Enter status'
                name='status'
                onChange={this.onChange}
                value={this.state.name}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant='primary' type='submit'>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect()(UserEdit);
