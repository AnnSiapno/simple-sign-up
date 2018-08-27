import React from "react"
import { Form, FieldHeader } from "components/common/form"
import { TextInput } from "components/common/form/inputs"
import { Link } from "react-router-dom"

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  linkContainer: {
    marginTop: 10
  },
  link: {
    margin: 5
  }
}

export class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  signUpUser = () => {
    console.log(this.state)
  }

  render(){
    return(
      <div style={styles.container}>
        <h1>Sign Up</h1>
        <Form onSubmit={this.signUpUser} submitText='Sign Up'>
          <FieldHeader>Email</FieldHeader>
          <TextInput type='email' name='email' value={this.state.email} onChange={this.handleChange} />
          <FieldHeader>Password</FieldHeader>
          <TextInput type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        </Form>
        <div style={styles.linkContainer}>
          <Link style={styles.link} to='/'>Back Home</Link>
          <Link style={styles.link} to='/signin/'>Sign in</Link>
        </div>
      </div>
    );
  }
}
