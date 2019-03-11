import React, { Component } from 'react';
import './index.css';

class logo extends Component {
  render() {
    return (
      <div id = "Logo" className = { this.props.className }>

        <div class = 'img rotation-slow' />
        <div id = 'title'>KAISHA</div>

      </div>
    );
  }
}

export default logo;
