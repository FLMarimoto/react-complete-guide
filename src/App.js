import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Filipe', age: 33 },
      { name: 'Max', age: 29 },
      { name: 'Jane', age: 26 },
    ]
  });

  const [ otherState, setOtherState ] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: 'Filipe', age: 33 },
        { name: 'Maximilian', age: 28 },
        { name: 'Jane', age: 27 }
      ]
    });
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={ personsState.persons[0].name } age ={ personsState.persons[0].age }>My Hobbies: Reading</Person>
      <Person name={ personsState.persons[1].name } age ={ personsState.persons[1].age } />
      <Person name={ personsState.persons[2].name } age ={ personsState.persons[2].age } />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??')); 
}

export default app;