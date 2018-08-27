import React from "react"

const styles = {
  button: {
    display: 'inline-block',
    padding: '5px 15px',
    margin: 10,
    backgroundColor: 'steelblue'
  }
}

export class Button extends React.Component {
  render() {
    return(
      <div style={styles.button}>{this.props.children}</div>
    )
  }
}
