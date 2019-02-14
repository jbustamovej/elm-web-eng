import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  buildLocationRow(locations) {
  };


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Elminda</h2>
        </div>

      <button
        onClick={() => this.props.addLocation({ name: 'China', region: 'Asia' })}
        >
        Add Stuff
      </button>

      <table>
        <thead>
          <tr><th>Name</th><th>Location</th></tr>
        </thead>
        <tbody>
          { this.buildLocationRows(this.props.locations) }
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
