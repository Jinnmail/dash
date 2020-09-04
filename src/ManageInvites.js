import React, {Fragment, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Grid, TextField} from '@material-ui/core';
import {fetchUser, fetchUserInvitesArr} from './userAliasesSlice';
import {useSelector, useDispatch} from 'react-redux';
import {LoginUtil} from './LoginUtil';
import NavBar from './NavBar';

function ManageInvites(props) {
  const [email, setEmail] = React.useState('');
  const [emailErrorText, setEmailErrorText] = React.useState('');

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userAliases.user);
  const userInvitesArr = useSelector((state) => state.userAliases.userInvitesArr);

  useEffect(() => {
    const userId = JSON.parse(atob(localStorage.getItem("jinnmailToken").split('.')[1])).userId
    dispatch(fetchUser(userId))
    dispatch(fetchUserInvitesArr(userId));
  }, [])

  const onEmailChange = (textBoxValue) => {
    setEmailErrorText('')
    setEmail(textBoxValue)
  }

  const onInviteClick = async () => {
    if (email.includes('@')) {
      const userId = JSON.parse(atob(localStorage.getItem("jinnmailToken").split('.')[1])).userId
      const res = await fetch(`${process.env.REACT_APP_API}/invite`, {
        method: 'POST', 
        headers: {
          'Content-type': 'application/json', 
          'Authorization': localStorage.getItem('jinnmailToken')
        }, 
        body: JSON.stringify({userId: userId, email: email})
      })
      const json = await res.json()
      if (!json.error) {
        document.getElementById('email').value = '';
        setEmail('')
        setEmailErrorText('')
        dispatch(fetchUser(userId))
        dispatch(fetchUserInvitesArr(userId))
      } else {
        setEmailErrorText(json.error.message);
      }
    } else {
      setEmailErrorText('Incorrect entry.')
    }
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {LoginUtil.loggedIn() && <NavBar />}
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={() => props.history.goBack()}>&lt; Back</Button>
        </Grid>
        <Grid item xs={12}>
          &nbsp;
        </Grid>
        <Grid item xs={12}>
          <small>{user && user.invites} Premium Invites Remaining</small>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={10} md={4}>
              <TextField 
                variant="outlined"
                id="email"
                label="Email" 
                type="email"
                fullWidth
                error={emailErrorText !== ''}
                helperText={emailErrorText}
                onChange={e => onEmailChange(e.target.value)} 
              />
            </Grid>
            <Grid item xs={2} md={8}>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={10} md={4}>
              <Button fullWidth variant="contained" color='primary' onClick={onInviteClick}>Invite</Button>
            </Grid>
            <Grid item xs={2} md={8}>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ul>
            {userInvitesArr.map(userInvite => (
              <li>{userInvite.email}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default withRouter(ManageInvites);

    {/* <div style={{border: "1px solid black", height: '90%'}}>Manage Invites</div> */}