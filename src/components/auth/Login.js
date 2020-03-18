import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
require('dotenv').config();
<<<<<<< HEAD
=======
// import logo from '../../../upload/gayain.png'
>>>>>>> desain-web

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
<<<<<<< HEAD
    // console.log('hahaa');

    axios
      .post(`${REACT_APP_URL}/user/login`, this.state)
=======
    axios
      .post(`${process.env.REACT_APP_URL}/user/login`, this.state)
>>>>>>> desain-web
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user-id', res.data.id);
        localStorage.setItem('status', res.data.status);
        localStorage.setItem('isAuth', true);
<<<<<<< HEAD
        this.props.history.push('/');
=======
        this.props.history.push('/Dashboard/Product');
>>>>>>> desain-web
      })

      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <div></div>
        <div className='loginContainer container'>
          <div className='loginCard card'>
            <div className='row justify-content-md-center'>
              <div className='col-md-8 my-4'>
                <form className='mt-5'>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter email'
                      name='email'
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Enter password'
                      name='password'
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    onClick={this.onSubmit}
                    type='submit'
                    className='btn btn-primary'
                  >
                    Login
                  </button>
                  ||
                  <Link className='btn btn-warning' to={'/Register'}>
                    Register
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
=======
      <div
        className='container'
        style={{ marginTop: '150px', backgroundColor: 'aqua'}}
      >
        <div className='card'>
          <div className='row login justify-content-md-center' style={{}}>
          <dev className="col-md-4"  style={{backgroundColor:'#192226'}} >
              askjdnasdj
            </dev>
            <div className='col-md-8 my-4'>
              <form>
                <div className='form-group'>
                <label>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email'
                    name='email'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    name='password'
                    onChange={this.onChange}
                  />
                </div>
                <button
                  onClick={this.onSubmit}
                  type='submit'
                  className='btn login btn-primary'
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
>>>>>>> desain-web
    );
  }
}

export default Login;
