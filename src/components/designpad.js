import React, { Component } from 'react';

class DesignPad extends Component {
  render() {
    return (
      <div className="design-pad">
        {this.props.item.name}
      </div>
    )
  }
}

export default DesignPad;
