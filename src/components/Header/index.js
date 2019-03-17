import React, { Component } from 'react';
import './index.css';

import Logo from '../../components/Logo';

class Header extends Component {
  render() {
    return (
      <div id= "Header" >
        <div id = 'Header-Background' />
        <Logo className = 'center' />
      </div>
    );
  }
}

export default Header;
