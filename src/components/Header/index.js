import React, { Component } from 'react';
import './index.css';

import Logo from '../../components/Logo';
import Menu from '../../components/Menu';

class Header extends Component {
  render() {
    return (
      <div id= "Header" >
        <Menu />
        <div id = 'Header-Background' />
        <Logo className = 'center' />
      </div>
    );
  }
}

export default Header;
