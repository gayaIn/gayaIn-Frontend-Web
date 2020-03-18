import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './components/redux/store';

import CategoryParent from './components/Dasboard/Category/categoryParent';
import ProductDash from './components/Dasboard/ProductDash';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import User from './components/user/User';

require('dotenv').config();

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={ProductDash} />
        <Route path='/Dashboard/Category' component={CategoryParent} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/user' component={User} />
      </Router>
    </Provider>
  );
}

export default App;
