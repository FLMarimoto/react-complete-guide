import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering');
        return(
            // <div className={classes.Person}>
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>}
                {/* <AuthContext.Consumer>
                    {context =>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>
                    }
                </AuthContext.Consumer> */}
                
                {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Login!</p>} */}
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3" 
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}
                    type="text" />
            </Aux>
            // </div>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);