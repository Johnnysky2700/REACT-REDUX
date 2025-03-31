import React, { Component } from 'react';
import Johnnysky from './Johnnysky';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Johnnysky name="sky" age="25" belt="black"/>
        <Johnnysky name="johnny" age="30" belt="green"/>
      </div>
    );
  }
}

export default App;
