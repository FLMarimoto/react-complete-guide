import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'qwdas', name: 'Filipe', age: 33 },
      { id: 'asda', name: 'Max', age: 28 },
      { id: 'zxczx', name: 'Jane', age: 26 }
    ], 
    otherState: 'Some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons = {this.state.persons} 
        clicked = {this.deletePersonHandler} 
        changed = {this.nameChangedHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          clicked = {this.togglePersonsHandler}
          title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}/>
        {persons}
      </div>
    );
  }
}
export default App;