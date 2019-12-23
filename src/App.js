import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Filipe" age ="33">My Hobbies: Reading</Person>
        <Person name="Max" age ="37" />
        <Person name="Jane" age ="23" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'));
  }
}

export default App;
