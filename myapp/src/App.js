import React, { Component } from 'react';
import Johnnysky from './Johnnysky';
import AddJohnny from './AddJohnny';

class App extends Component {
  state = {
    johnnysky : [
      { name: 'Sky', age: 30, belt: 'black', id: 1 },
      { name: 'Johny', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Johnnysky johnnysky={this.state.johnnysky} />
        <AddJohnny/>
      </div>
    );
  }
}

export default App;
