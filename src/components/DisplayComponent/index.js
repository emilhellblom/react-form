import React, { Component } from 'react';
import ParentComponent from '../ParentComponent';

class DisplayComponent extends Component {
  render() {
    return (
      <div>{ this.props.sayWhat }</div>
    );
  }
}

export default DisplayComponent;
