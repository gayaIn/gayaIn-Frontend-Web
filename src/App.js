import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";

import CategoryParent from "./components/Dasboard/Category/categoryParent";
import ProductDash from "./components/Dasboard/ProductDash";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import User from "./components/user/User";
import History from "./components/history/history";
import error from "./assets/404.png";
import { Button } from "react-bootstrap";
require("dotenv").config();

const notFound = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src={error} alt="notFound" height={550} width={900} />
      </div>
      <div class="col text-center">
        <Link to="/">
          <Button variant="outline-primary">Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductDash} />
            <Route path="/Category" component={CategoryParent} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={User} />
            <Route path="/history" component={History} />
            <Route component={notFound} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
