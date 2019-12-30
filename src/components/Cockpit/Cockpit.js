import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const assignedClasses = [];
    const toggleBtnRef = useRef(null);

    let btnClass = '';
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
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
    
    if(props.personsLength < 3) {
        assignedClasses.push(classes.red);
    }
    if(props.personsLength < 2) {
        assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                onClick={props.clicked} 
                ref={toggleBtnRef}
                className={btnClass}>
                    Toggle Persons
            </button>
            <AuthContext.Consumer>
                {context => 
                    <button 
                        onClick={context.login}> 
                            Log in
                    </button>
                }
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);
        