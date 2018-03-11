import React from 'react';

import logo from './logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header text-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Contacts</h1>
      </header>
    );
  }
}

export default Header;
