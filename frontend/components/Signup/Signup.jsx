import React from 'react';
import SignupContainer from './signupContainer';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
const NewSessionForm = (props) => {
    return (
        <div className='new-session'>
            <div className='signup-header'>
                <span className='pyrrha-signup'>pyrrha</span>
                <Link to="/login"><button className="Log-in-button">Log In</button></Link>
            </div>
            <div className='signup-contents'>
                <section className="intro">Find the music you love and let the music you love find you.</section>
                <span className="smaller-text">Sign up for free</span>
                <SignupContainer 
                    {...props}
                />
            </div>


        </div>
    );
};

export default NewSessionForm;