import { Switch, Route, IndexRoute, Link } from 'react-router-dom'
import React from "react";

import { Home as HomePage } from 'components/home'
import { SignUp as SignUpPage } from 'components/signup'

class App extends React.Component{
  render(){
    console.log('rendering app')
    return(
      <div>{this.props.children}</div>
    )
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
    <Route exact path="/" component={HomePage}/>
    <Route name="sign-up" path="/signup/*" component={SignUpPage}/>
    <Route name="sign-in" path="/signin/*" component={SignIn}/>
    <Route name="profile" path="/profile/:userId" component={Profile}/>
  </Switch>
)
