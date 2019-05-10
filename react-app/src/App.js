import React from 'react';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age: 29},
      {name: 'Manu2', age: 20}
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
