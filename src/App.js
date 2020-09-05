import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import CreateAccount from './CreateAccount';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Account from './Account';
import {LoginUtil} from './LoginUtil';
import VerifyCode from './VerifyCode';
import ForgotPasswordSet from './ForgotPasswordSet';
import ManageInvites from './ManageInvites';
import RedeemInvite from './RedeemInvite';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={["/forgot-password", "/dashboard/change-password"]}>
            <ForgotPassword />
          </Route>
          <Route exact path={["/forgot-password-set", "/dashboard/change-password-set"]}>
            <ForgotPasswordSet />
          </Route>
          <Route path="/account">
            {LoginUtil.loggedIn() ? <Account /> : <Redirect push to="/login" />} 
          </Route>
          <Route path="/verify-code">
            <VerifyCode />
          </Route>
          {LoginUtil.loggedIn() && 
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          }
          <Route path="/invites">
            {LoginUtil.loggedIn() ? <ManageInvites /> : <Redirect push to="/login" />} 
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <CreateAccount />
          </Route>
          <Route path="/redeem-invite">
            <RedeemInvite />
          </Route>
          <Route path="/">
            {LoginUtil.loggedIn() ? <Redirect to="/dashboard" /> : <Redirect push to="/signup" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

