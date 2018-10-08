import React, { Component } from 'react';
import './App.css';
import { bars } from './bars.json';
import Bar from './components/Bar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: "Click to find a bar:"
    }
  }

  generateBar() {
    let bar = bars[Math.floor(Math.random()*bars.length)];
    this.setState({bar: bar});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Find a Bar</h1>
          <button onClick={() => this.generateBar()}>Find</button>
        </div>
        <p className="App-intro">
          <Bar bar={this.state.bar} />
        </p>
      </div>
    );
  }
}

export default App;
