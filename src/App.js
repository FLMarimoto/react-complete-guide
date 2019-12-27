import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white; 
  font: inherit;
  border: 1px solid black ;
  padding: 8px; 
  cursor: pointer;
  
  &:hover {
    background-color: lightgreen; 
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'qwdas', name: 'Filipe', age: 33 },
      { id: 'asda', name: 'Max', age: 28 },
      { id: 'zxczx', name: 'Jane', age: 26 }
    ], 
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}); 
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons.slice()];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  render() {
    const classes = [];
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.nameChangedHandler(event, person.id)}
              name = { person.name } 
              age = { person.age }
              key = { person.id }/>
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    if(this.state.persons.length < 3) {
      classes.push('red')
    }
    if(this.state.persons.length < 2) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}
export default App;