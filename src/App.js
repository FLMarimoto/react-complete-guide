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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name= { person.name } 
              age = { person.age }/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> {/*LESS EFFICIENT*/}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}
export default App;