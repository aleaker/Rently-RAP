import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import img from "../assets/1.png" 
import { bindActionCreators } from "redux";
import {connect } from "react-redux"
import * as actions from "../store/actions/userActions"
const useStyles = makeStyles(theme => ({
  
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: "relative",
        zIndex: 100,
        backgroundColor: "white"
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(1),
        
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      },
      container:{
          // backgroundImage: `url(${img})` ,
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          position: "absolute",

      }
}));









 function Login(props) {
  const classes = useStyles();

  const [state, setState] = useState({ email: "", password: ""});

  const handleChange = e => {
    e.persist();
    setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = e =>{
    e.preventDefault()
    props.login(state)
  }
  return (
      <div className={classes.container} >
    <Container component="main" maxWidth="xs" >

     
    <Box boxShadow={3} className={classes.paper} p={5} borderRadius={16}>
    <Avatar className={classes.avatar}> <LockOutlinedIcon/></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={state.email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={handleChange}
          />
    
     
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
      </form>
    </Box>
    </Container>
    </div>
  );
}

function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
