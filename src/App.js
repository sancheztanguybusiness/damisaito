import React, { Component } from 'react';
import './index.css';

import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div id= "App" >
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
