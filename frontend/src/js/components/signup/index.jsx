import React from "react"

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

export class SignUp extends React.Component{
  render(){
    return(
      <div style={styles.container}>
        <h1>Sign Up</h1>
      </div>
    );
  }
}
