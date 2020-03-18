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
          <Form>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter name'
                name='name'
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                name='email'
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter username'
                name='username'
                onChange={this.onChange}
                value={this.state.username}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Enter password'
                name='password'
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter address'
                name='alamat'
                onChange={this.onChange}
                value={this.state.alamat}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter address'
                name='provinsi'
                onChange={this.onChange}
                value={this.state.provinsi}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter address'
                name='kota'
                onChange={this.onChange}
                value={this.state.kota}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter address'
                name='status'
                onChange={this.onChange}
                value={this.state.status}
              />
            </div>
            <button
              onClick={this.onSubmit}
              type='submit'
              className='btn btn-primary'
            >
              Edit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect()(UserEdit);
