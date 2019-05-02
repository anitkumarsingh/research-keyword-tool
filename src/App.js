import React, { Component } from 'react';
import logo from './Images/SellerApp white logo.png';
import './App.css';
import Nav from './Components/NavBar/NavBar';
import Search from './Components/SearchBox/SearchBox';
import CotentsBody from './Components/Contents/Contents';
import CallToAction from './Components/CallToAction/CallAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="15%" height="5%" />
            <Nav/>
            <Search/>
        </header>
        <CotentsBody/>
        <CallToAction/>
      </div>
    );
  }
}

export default App;
