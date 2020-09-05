import React, { useEffect } from 'react';
import {Link, withRouter} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import {
  Button,
  Divider,  
  Grid, 
  Hidden, 
  LinearProgress, 
  List, 
  ListItem, 
  TextField, 
} from '@material-ui/core';

function RedeemInvite(props) {
  const [redeemCode, setRedeemCode] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [redeemTries, setRedeemTries] = React.useState(0);
  const [recaptcha, setRecaptcha] = React.useState(false);
  const [allowedToSubmit, setAllowedToSubmit] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const [stepsEnabled, setStepsEnabled] = React.useState(true);
  const [initialStep, setInitialStep] = React.useState(0);
  const [steps, setSteps] = React.useState([{
    element: ".hello", 
    intro: "Hello step"
  }, {
    element: '.world', 
    intro: "World step"
  }]);
  const [hintsEnabled, setHintsEnabled] = React.useState(true);
  const [hints, setHints] = React.useState([{
    element: ".hello", 
    hint: 'Hello hint', 
    hintPosition: "middle-right"
  }])

  let content;

  useEffect(() => {
    var url = new URL(window.location.href);
    var email = atob(url.searchParams.get("e"))
    setEmail(email)
  }, [])

  const onExit = () => {
    setStepsEnabled(false);
  }

  const toggleSteps = () => {
    setStepsEnabled(!stepsEnabled);
  }

  const toggleHints = () => {
    setHintsEnabled(!hintsEnabled);
  }

  const addStep = () => {
    const newStep = {element: ".alive", intro: 'Alive step'}
    setSteps(steps.concat(newStep));
  }

  const addHint = () => {
    const newHint = {
      element: ".alive", 
      hint: "Alive hint", 
      hintPosition: "middle-right"
    }
    setHints(hints.concat(newHint));
  }

  const onRedeemChanged = (event) => {
    if (event.target.value.length === 6) {
      setRedeemCode(event.target.value)
      if (!recaptcha) {
        setAllowedToSubmit(true)
      }
      // setRecaptcha(true);
    } else {
      setRedeemCode('')
      // setRecaptcha(false);
      setAllowedToSubmit(false);
    }
  }

  const onRecaptchaSuccess = () => {
    setAllowedToSubmit(true)
  }

  const onRedeemClicked = async () => {    
    const res = await fetch(`${process.env.REACT_APP_API}/invite/redeem`, {
      method: 'POST', 
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify({email: email, inviteCode: redeemCode})
    })
    const json = await res.json()
    if (!json.error) {
      setTimeout(() => {
        setStep(2);
        // props.history.push('/login')
      }, 1000)
    } else {
      setRedeemTries(redeemTries => redeemTries + 1);
      if (redeemTries >= 1 && process.env.NOD_ENV !== 'development') {
        setAllowedToSubmit(false);
        setRecaptcha(true);
      }
    }
  }

  // if (step === 1) {
  //   content = 
  //     <Grid 
  //       container
  //       direction="row"
  //       justify="center"
  //       alignItems="stretch">
  //       <Grid item xs={4}>
          
  //       </Grid>
  //       <Grid item xs={4}>
  //         <h2 style={{textAlign: 'center', color: 'gray'}}>Got a Jinn-For-Life invite?</h2>
  //       </Grid>
  //       <Grid item xs={4}></Grid>
  //       <Grid item xs={1} md={4}></Grid>
  //       <Grid item xs={10} md={4} style={{textAlign: "center"}}>If you received a Premium invite to our upgraded service, enter your invite code below.</Grid>
  //       <Grid item xs={1} md={4}></Grid>
  //       <Grid item xs={12}>&nbsp;</Grid>
  //       <Grid item xs={1} md={4}>

  //       </Grid>
  //       <Grid item xs={10} md={4}>
  //           <Grid container spacing={2}>
  //             <Grid item xs={12}>
  //               <TextField label="Invite Code" variant="outlined" fullWidth onChange={onRedeemChanged} />
  //               {/* <TextField label="" variant="outlined" fullWidth onChange={onEmailChanged} /> */}
  //             </Grid>
  //           </Grid>
  //       </Grid>
  //       <Grid item xs={1} md={4}>
                
  //       </Grid>
  //       <Grid item xs={12}>
  //         &nbsp;
  //       </Grid>
  //       <Grid item xs={1} md={4}>

  //       </Grid>
  //       <Grid item xs={11} md={2}>
  //         {
  //           recaptcha && 
  //           <ReCAPTCHA
  //             size="compact"
  //             sitekey="6LfoK8MZAAAAAAqzzkWscqJbD0fCizOs13IfOZu9"
  //             onChange={onRecaptchaSuccess}
  //           />
  //         }
  //       </Grid>
  //       <Hidden mdUp>
  //         <Grid item xs={1}>
            
  //         </Grid>
  //       </Hidden>
  //       <Grid item xs={10} md={2} style={{textAlign: "right"}}>
  //         <Button variant="outlined" color="primary" onClick={onRedeemClicked} disabled={!allowedToSubmit}>Redeem</Button>
  //         {/* <Button variant="contained" color="primary" onClick={onRequestCodeClicked} disabled={!allowedToSubmit}>Request code</Button> */}
  //       </Grid>
  //       <Grid item xs={1} md={4}>
          
  //       </Grid>
  //       <Grid item xs={12}>&nbsp;</Grid>
  //       <Grid item xs={1} md={4}>
              
  //       </Grid>
  //       <Grid item xs={10} md={4} style={{textAlign: 'center'}}>
  //         -- No Premium invite? --
  //         <Grid container>
  //           <Grid item xs={3} md={4} />
  //           <Grid item xs={7} md={4} style={{textAlign: 'left'}}>
  //             <small>Ask around. <i>New Jinnmail Premium</i> users are given a handful of Jinn-For-Life invites to give out.</small>
  //           </Grid>
  //           <Grid item xs={2} md={4} />
  //         </Grid>
  //       </Grid>
  //       <Grid item xs={1} md={4}>
          
  //       </Grid>
  //     </Grid>
  // } else {
    content =

    <div>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}  
      />
      <Hints enabled={hintsEnabled} hints={hints} />
      <button onClick={toggleSteps}>Steps</button>
      <h1 className="hello">Hello,</h1>
      <hr />
      <h1 className="world">World!</h1>
      <hr />
      <h1 className="alive">It's alive!</h1>
    </div>

      // <div>
      //   <Steps
      //     enabled={stepsEnabled}
      //     steps={steps}
      //     initialStep={initialStep}
      //     onExit={onExit}  
      //   />
      //   <Hints enabled={hintsEnabled} hints={hints} />
      //   <div className="controls">
      //     <div>
      //       <button onClick={toggleSteps}>Toggle Steps</button>
      //       <button onClick={addStep}>Add Step</button>
      //     </div>
      //     <div>
      //       <button onClick={toggleHints}>Toggle Hints</button>
      //       <button onClick={addHint}>Add Hint</button>
      //     </div>
      //   </div>
      //   <h1 className="hello">Hello,</h1>
      //   <hr />
      //   <h1 className="world">World!</h1>
      //   <hr />
      //   <h1 className="alive">It's alive!</h1>
      // </div>

      // <Grid container>
      //   <Grid item xs={4}>

      //   </Grid>
      //   <Grid item xs={4}>
          
      //   </Grid>
      //   <Grid item xs={4}>
      //     <Grid item xs={12}>&nbsp;</Grid>
      //     <img src="ext.png" alt="ext" />
      //   </Grid>
      // </Grid> 

      // <Grid 
      //   container
      //   direction="row"
      //   justify="center"
      //   alignItems="stretch">
      //   <Grid item xs={4}>
          
      //   </Grid>
      //   <Grid item xs={4}>
      //     <h2 style={{textAlign: 'center', color: 'gray'}}>Camouflage your email address with Jinnmail.</h2>
      //   </Grid>
      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={1} md={4}></Grid>
      //   <Grid item xs={10} md={4} style={{textAlign: "center"}}>
      //     Fight spam, hackers, and surveillance with secret temporary email aliases for every interaction, 
      //     keeing your address private and spam-free.
      //   </Grid>
      //   <Grid item xs={1} md={4}>
      //     <img src="ext.png" alt="logo" />
      //   </Grid>
      //   <Grid item xs={12}>&nbsp;</Grid>
      //   <Grid item xs={12} style={{textAlign: 'center'}}>
      //     <b>You can now use the extension!</b>
      //   </Grid>
      //   <Grid item xs={12} style={{textAlign: 'center'}}>
      //     Go ahead. Give it a try.
      //   </Grid>
      //   <Grid item xs={12} style={{textAlign: 'center'}}>
      //     <Button variant="outlined" color="primary">Open Jinnmail extension</Button>
      //   </Grid>
      //   <Grid item xs={12}>&nbsp;</Grid>
      //   <Grid item xs={12} style={{textAlign: 'center'}}>
      //     <b>Get the extension</b>
      //   </Grid>
      //   <Grid item xs={12} style={{textAlign: 'center'}}>
      //     <Button variant="outlined" color="primary" onClick={() => {window.open("https://chrome.google.com/webstore/detail/jinnmail-%E2%80%94-privacy-for-yo/nbeghdcngabhmanlobkjlnahdlimiejg/", "_blank")}}>+ Get it for Chrome</Button>
      //   </Grid>
      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={4} style={{textAlign: 'center'}}>
      //     <small>
      //       Jinnmail can still be used without it, but the chrome extension
      //       makes lif SO MUCH EASIER.
      //     </small>
      //   </Grid>
      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={3}></Grid>
      //   <Grid item xs={6}>
      //     <List>
      //       <ListItem></ListItem>
      //       <Divider />
      //       <ListItem></ListItem>
      //     </List>
      //   </Grid>
      //   <Grid item xs={3}></Grid>
      //   <Grid item xs={1} md={4}>
              
      //   </Grid>
      //   <Grid item xs={10} md={4}>
      //     <p style={{textAlign: 'center'}}>-- Create your account --</p>
      //   </Grid>
      //   <Grid item xs={1} md={4}>
          
      //   </Grid>
      //   <Grid item xs={1} md={4}>
              
      //   </Grid>
      //   <Grid item xs={10} md={4} style={{textAlign: 'center'}}>
      //     <small>If you received an invite to our upgraded service, enter you invite code here.</small>
      //   </Grid>
      //   <Grid item xs={1} md={4}>
          
      //   </Grid>
      //   <Grid item xs={4}>
              
      //   </Grid>
      //   <Grid item xs={2} style={{textAlign: 'center'}}>
      //     <Link to="/login" style={{textDecoration: 'none'}}>
      //       <Button variant="contained" color="primary">Login</Button>
      //     </Link>
      //   </Grid>
      //   <Grid item xs={2}>
      //     <Link to="/signup" style={{textDecoration: 'none'}}>
      //       <Button variant="outlined" color="primary">Create Account</Button>
      //     </Link>
      //   </Grid>
      //   <Grid item xs={4}>
          
      //   </Grid>
      //   <Grid item xs={1} md={4}>
              
      //   </Grid>
      //   <Grid item xs={10} md={4} style={{textAlign: 'center'}}>
      //     <p>-- Or manage your account --</p>
      //   </Grid>
      //   <Grid item xs={1} md={4}>
          
      //   </Grid>
      //   <Grid item xs={1} md={4}>
              
      //   </Grid>
      //   <Grid item xs={10} md={4} style={{textAlign: 'center'}}>
      //     <small>View your account and manage your aliases.</small>
      //   </Grid>
      //   <Grid item xs={1} md={4}>
          
      //   </Grid>
      //   <Grid item xs={12} style={{textAlign: 'center'}}>
      //     <Link to="/dashboard" style={{textDecoration: 'none'}}>
      //       <Button variant="contained" color="primary">Account Dashboard</Button>
      //     </Link>
      //   </Grid>
      // </Grid>
  // }

  return (
    <div>
      {content}
    </div>
  )
}

export default withRouter(RedeemInvite);