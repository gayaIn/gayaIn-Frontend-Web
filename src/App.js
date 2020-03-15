import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'  

import {Provider} from 'react-redux'
import store from './components/redux/store'

import ProductParent from './components/Product/productParent'
import CategoryParent from './components/Dasboard/Category/categoryParent'
import ProductDash from './components/Dasboard/ProductDash'
require('dotenv').config()

function App() {
  console.log(process.env)
  return (
    <Provider store={store}>
      <Router>
          <Route exact path="/" component={ProductParent} />
          <Route path="/Dashboard/Category" component={CategoryParent} />
          <Route path="/Dashboard/Product" component={ProductDash} />
      </Router>
    </Provider>
  );
}

export default App;
