import React from 'react';
import {LoginUtil} from './LoginUtil';
import NavBar from './NavBar';
import { Grid } from '@material-ui/core';

function Contact() {

  return (
    <div style={{maxWidth: "100%", padding: "10px"}}>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {LoginUtil.loggedIn() && <NavBar />}
        </Grid>
        {/* <Grid item xs={12}>
          <img src="logo.png" alt="logo" width="250" height="62" />
        </Grid> */}
        <Grid item xs={12}>
          Developer Contact Info: 
          <br />
          <br />
          jgschiiller@gmail.com
        </Grid>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={10} md={3}>
         
        </Grid>
        <Grid item xs={2} md={9}></Grid>
        <Grid item xs={12}>
         
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact;
