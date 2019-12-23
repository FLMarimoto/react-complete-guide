import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Filipe', age: 33 },
      { name: 'Max', age: 28 },
      { name: 'Jane', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Filipe', age: 33 },
        { name: newName, age: 28 },
        { name: 'Jane', age: 26 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Filipe', age: 33 },
        { name: event.target.value, age: 28 },
        { name: 'Jane', age: 26 }
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Max')}>Switch Name</button> {/*LESS EFFICIENT*/}
        <Person
          name= { this.state.persons[0].name } 
          age = { this.state.persons[0].age }>My Hobbies: Reading</Person>
        <Person
          name= { this.state.persons[1].name } 
          age = { this.state.persons[1].age } 
          click = {this.switchNameHandler.bind(this, 'Maximilian')} /*MORE EFFICIENT*/
          changed = {this.nameChangedHandler}/>
        <Person
          name= { this.state.persons[2].name } 
          age = { this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}
export default App;