import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Grid, Hidden, IconButton, InputAdornment, LinearProgress, TextField, Tooltip} from '@material-ui/core';
import {Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon} from '@material-ui/icons';
import ReCAPTCHA from "react-google-recaptcha";

console.log(process.env.REACT_APP_API)
console.log(process.env.NODE_ENV)

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [recaptcha, setRecaptcha] = React.useState(false);
  const [generalLoginErrorText, setGeneralLoginErrorText] = React.useState('');
  const [passwordValues, setPasswordValues] = React.useState({password: '', showPassword: false});
  const [allowedToSubmit, setAllowedToSubmit] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [failedLogin, setFailedLogin] = React.useState(0);

  const onEmailChanged = (event) => {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(event.target.value)) {
      setEmail(event.target.value)
      setEmailErrorText('')
    } else {
      setEmail('')
    }
  }

  const onPasswordChanged = (prop) => (event) => {
    if(/(?=.{12,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])/.test(event.target.value)) {
      setAllowedToSubmit(true);
    }  else {
      setAllowedToSubmit(false);
    }
    setPasswordValues({ ...passwordValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPasswordValues({ ...passwordValues, showPassword: !passwordValues.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onRecaptchaSuccess = (value) => { // only fires on success
    setAllowedToSubmit(true);
  }

  const onLoginClick = async () => {
    if (allowedToSubmit) {
      setSubmitting(true);
      const res = await fetch(`${process.env.REACT_APP_API}/user/session`, {
        method: 'post', 
        headers: {'Content-type': 'application/json'}, 
        body: JSON.stringify({email: email, password: passwordValues.password})
      })
      const json = await res.json();
      if (!json.error) {
        localStorage.setItem("jinnmailToken", json.data.sessionToken);
        setTimeout(() => {
          props.history.push('/dashboard');
        }, 1000)
      } else {
        setFailedLogin(failedLogin => failedLogin + 1);
        if (failedLogin > 1) {
          if (process.env.NODE_ENV !== 'development') {
            setAllowedToSubmit(false);
            setRecaptcha(true);
          }
        }
        setGeneralLoginErrorText(json.error);
      }
      setSubmitting(false);
    }
  }

  const location = {
    pathname: '/forgot-password',
    state: {prevPath: '/login'}
  }

  return (
    <form>
      <Grid container style={{textAlign: 'center'}}>
        <Grid item xs={1} md={4}>

        </Grid>
        <Grid item xs={10} md={4}>
          <Grid container>
            <Grid item xs={12}>
              <h2 style={{textAlign: 'center', color: 'gray'}}>Jinnmail</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email address"
                type="email"
                variant="outlined"
                fullWidth
                onChange={onEmailChanged}
                error={emailErrorText !== ''}
                helperText={emailErrorText}
              />
            </Grid>
            <Grid item xs={12}>&nbsp;</Grid>
            <Grid item xs={12}>
              <TextField 
                variant='outlined'
                label='Password'
                type={passwordValues.showPassword ? 'text' : 'password'}
                value={passwordValues.password}
                onChange={onPasswordChanged('password')}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="Show/Hide typing">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {passwordValues.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  )
                }}
              />
              {submitting && <LinearProgress />}
            </Grid>
            <Grid item xs={12} style={{textAlign: 'left'}}>
              <small>
                <Link to={location}>Forgot Password?</Link>
              </small>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} md={4}></Grid>
        <Grid item xs={12}>&nbsp;</Grid>

        <Grid item xs={1} md={4}>

        </Grid>
        <Grid item xs={10} md={2}>
          {
            recaptcha && 
            <ReCAPTCHA
              size="compact"
              sitekey="6LfoK8MZAAAAAAqzzkWscqJbD0fCizOs13IfOZu9"
              onChange={onRecaptchaSuccess}
            />
          }
        </Grid>
        <Hidden mdUp>
          <Grid item xs={1}></Grid>
        </Hidden>
        <Grid item xs={11} md={2} style={{textAlign: "right"}}>
          <Button variant="contained" color="primary" onClick={onLoginClick} disabled={!allowedToSubmit}>Log In</Button>
        </Grid>
        <Grid item xs={1} md={4}>
          
        </Grid>
        <Grid item xs={12} style={{color: 'red'}}>
          {generalLoginErrorText}
        </Grid>
        <Grid item xs={1} md={4}>
              
        </Grid>
        <Grid item xs={10} md={4}>
          <p style={{textAlign: 'center'}}>-- No Account? --</p>
        </Grid>
        <Grid item xs={1} md={4}>
          
        </Grid>
        <Grid item xs={2} md={5}>
              
        </Grid>
        <Grid item xs={8} md={2}>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            <Button variant="outlined" color="primary" fullWidth>Create Account</Button>
          </Link>
        </Grid>
        <Grid item xs={2} md={5}>
          
        </Grid>
      </Grid>
    </form>
  )
}

export default withRouter(Login);