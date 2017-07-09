import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  buildLocationListItems(locations) {


    var outArr = [];


    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        var element = locations[key];
        // console.log(element.name)
        outArr.push(<tr><td>{element.name + ' ' + element.region}</td></tr>);
      }
    }

    return outArr;
  };


  render() {
    console.log(this.props.locations);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Elminda</h2>
        </div>

        <div>
           <lable>Name:  <input type="text" ref={input => this._name = input} /></lable>
           
           <lable>Region:  <input type="text" ref={input => this._region = input} /></lable>
        </div>

      <button
        onClick={() => this.props.addLocation({ name: this._name.value, region: this._region.value })}
        >
        Add Stuff
      </button>

      <table>
        <thead>
          <tr><th>Name</th><th>Region</th></tr>
        </thead>
        <tbody>
          
          { this.buildLocationListItems(this.props.locations) }
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
