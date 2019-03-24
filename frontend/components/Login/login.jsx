import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends React.Component {

    
    render () {
        return (
            <div className='new-session'>
                <div className='signup-header'>
                    <Link to='/' className='pyrrha-signup'>pyrrha</Link>
                    <Link to='/signup'><button className="Sign-up-button">Sign Up</button></Link>
                </div>
                <div className='signup-contents'>
                    <section className="intro">Find the music you love and let the music you love find you.</section>
                    <LoginForm {...this.props}/>
                </div>
            </div>
        );
    }
};

export default Login;