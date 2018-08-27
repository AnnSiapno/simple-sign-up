import { Switch, Route, IndexRoute, Link } from 'react-router-dom'
import React from "react";

import { Home as HomePage } from 'components/home'
import { SignUp as SignUpPage } from 'components/signup'
import { SignIn as SignInPage } from 'components/signin'

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
    <Route name="sign-in" path="/signin/*" component={SignInPage}/>
    <Route name="profile" path="/profile/:userId" component={Profile}/>
  </Switch>
)
