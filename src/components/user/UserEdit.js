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
      provinsi: user.kota,
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
    await this.props.dispatch(editUser(this.state));
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
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter name'
                name='name'
                onChange={this.onChange}
                id='validationDefault02'
                required
                value={this.state.name}
              />
              <div class='invalid-feedback'>Please choose a username.</div>
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                name='email'
                onChange={this.onChange}
                value={this.state.email}
                required
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
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Enter password'
                name='password'
                onChange={this.onChange}
                required
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
                required
              />
            </div>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                as='select'
                name='category_id'
                onChange={this.onChange}
              >
                <option value={'jakarta'}>Jakarta</option>
                <option value={'jawa_barat'}>Jawa Barat</option>
                <option value={'jawa_tengah'}>Jawa Tengah</option>
                <option value={'jawa_tengah'}>Sulawesi</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>Kota</Form.Label>
              <Form.Control
                as='select'
                name='category_id'
                onChange={this.onChange}
              >
                <option value={'jakarta'}>Jakarta</option>
                <option value={'bogor'}>Bogor</option>
                <option value={'tangerang'}>Tangerang</option>
                <option value={'bekasi'}>Bekasi</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as='select'
                name='category_id'
                onChange={this.onChange}
              >
                <option value={1}>Admin</option>
                <option value={2}>Cashier</option>
              </Form.Control>
            </Form.Group>
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
