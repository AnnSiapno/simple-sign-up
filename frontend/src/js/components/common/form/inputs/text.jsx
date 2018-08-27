import React from 'react';

const styles = {
  input: {
    marginBottom: 10
  }
}

export default class TextInput extends React.Component {
  render() {
    return (
      <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} style={styles.input}/>
    );
  }
}
