import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Filipe', age: 33 },
      { name: 'Max', age: 28 },
      { name: 'Jane', age: 26 }
    ],
    i: 0
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({persons: [
      { name: 'Filipe', age: 33 },
      { name: 'Maximilian', age: 28 },
      { name: 'Jane', age: 27 }
    ]});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age ={ this.state.persons[0].age }>My Hobbies: Reading</Person>
        <Person name={ this.state.persons[this.state.i].name } age ={ this.state.persons[this.state.i].age } />
        <Person name={ this.state.persons[2].name } age ={ this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}

export default App;
