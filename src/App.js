import React, { Component } from 'react';
import './App.css';
import { bars } from './bars.json';
import Bar from './components/Bar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: ""
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
          <p>Click the button below to find a bar</p>
          <button onClick={() => this.generateBar()}>Find</button>
        </div>
        <p className="App-intro">
          <Bar bar={this.state.bar} />
        </p>
        <footer>
          <div>Please Drink Responsibly, Don't Drink and Drive. Get an <a href="https://www.uber.com/">Uber</a> or <a href="https://www.lyft.com/">Lyft</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
