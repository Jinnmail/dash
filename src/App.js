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

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          LoginUtil.loggedIn() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path={["/forgot-password", "/dashboard/change-password"]}>
            <ForgotPassword />
          </Route>
          <Route exact path={["/forgot-password-set", "/dashboard/change-password-set"]}>
            <ForgotPasswordSet />
          </Route> */}
          <PrivateRoute path='/account'>
            <Account /> 
          </PrivateRoute>
          <Route path="/verify-code">
            <VerifyCode />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/invites'>
            <ManageInvites /> 
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <CreateAccount />
          </Route>
          <Route path="/redeem-invite">
            <RedeemInvite />
          </Route>
          <Redirect to='/dashboard' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

