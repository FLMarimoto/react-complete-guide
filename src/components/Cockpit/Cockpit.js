import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup in useEffect')
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup in useEffect')
        };
    });


    if(props.showPersons) {
        btnClass = classes.Red;
    }
    
    if(props.persons.length < 3) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length < 2) {
        assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button onClick={props.clicked} className={btnClass}>
                Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;
        