import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Most famous DevOps Tools here3468826846516846516:</h2>

        </div>
        <ul>
          <li><Link to="/Git">Git</Link></li>
          <li><Link to="/Jenkins">Jenkins</Link></li>
          <li><Link to="/Docker">Docker</Link></li>
          <li><Link to="/Kubernetes">Kubernetes</Link></li>
        </ul>

      </div>
    );
  }
}

export default App;
