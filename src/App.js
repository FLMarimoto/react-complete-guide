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
    otherState: 'Some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }
  
  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      color: 'blue', 
      border: '1px solid blue',
      padding: '8px', 
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button> {/*LESS EFFICIENT*/}
        {this.state.showPersons ?
          <div>
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
        :
          null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}
export default App;