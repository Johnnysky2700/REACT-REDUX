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
  addJohnny = (johnny) => {
     johnny.id = Math.random();
     let johnnysky = [...this.state.johnnysky, johnny];
     this.setState({
      johnnysky: johnnysky
     })
  }
  deleteJohnny = (id) => {
      let johnnysky = this.state.johnnysky.filter(johnny => {
        return johnny.id !== id
      });
      this.setState({
        johnnysky: johnnysky
      })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Johnnysky deleteJohnny={this.deleteJohnny} johnnysky={this.state.johnnysky} />
        <AddJohnny addJohnny={this.addJohnny}/>
      </div>
    );
  }
}

export default App;
