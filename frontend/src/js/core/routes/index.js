import { Switch, Route, IndexRoute, Link } from 'react-router-dom'
import React from "react";

import { Home as HomePage } from 'components/home'

class App extends React.Component{
  render(){
    console.log('rendering app')
    return(
      <div>{this.props.children}</div>
    )
  }
}

class SignUp extends React.Component{
  render(){
    console.log('rendering sign up')
    return(
      <div>
        <h1>SIGNUP PAGE</h1>
      </div>
    );
  }
}

class SignIn extends React.Component{
  render(){
    console.log('rendering sign in')
    return(
      <div>
        <h1>SIGNIN PAGE</h1>
      </div>
    );
  }
}

class Profile extends React.Component{
  render(){
    console.log('rendering profile')
    return(
      <div>
        <h1>PROFILE PAGE</h1>
      </div>
    );
  }
}

export const routes = (
  <Switch>
    <Route path="/" component={HomePage}/>
    <Route name="sign-up" path="/signup/*" component={SignUp}/>
    <Route name="sign-in" path="/signin/*" component={SignIn}/>
    <Route name="profile" path="/profile/:userId" component={Profile}/>
  </Switch>
)
