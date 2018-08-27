import React from "react"

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  label: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 5
  }
}

export class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} style={styles.form}>
        {this.props.children}
        <input type="submit" value={this.props.submitText}/>
      </form>
    )
  }
}

export class FieldHeader extends React.Component {
  render() {
    return (
      <label style={styles.label}>{this.props.children}</label>
    )
  }
}
