import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';


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
    const assignedClasses = [];
    const btnClass = [classes.Button];
    
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
      btnClass.push(classes.Red);
    }

    if(this.state.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button onClick={this.togglePersonsHandler} className={btnClass.join(' ')}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}
export default App;