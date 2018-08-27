import React from "react";

import { Link } from 'react-router-dom'
import { Button } from 'components/common/buttons.jsx'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  buttonText: {
    color: 'white',
    textDecoration: 'none'
  }
}

export class Home extends React.Component{
  render(){
    return(
      <div style={styles.container}>
        <h1>Simple Sign up App</h1>
        <div>
          <Button>
            <Link style={styles.buttonText} to='/signup/'>Sign up</Link>
          </Button>
          <Button>
            <Link style={styles.buttonText} to='/signin/'>Sign in</Link>
          </Button>
        </div>
      </div>
    );
  }
}
