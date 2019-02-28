import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupComponent from '../common/Input';
 

class Login extends Component {
    constructor(props) {
        super(props);
        const password = this.props.errors ? this.props.errors[0] : null;
        this.state = {
            email: '',
            password: '',
            errors: {password},
            loggedIn: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.loginAsGuest = this.loginAsGuest.bind(this);
        this.loginAsGuestHelper = this.loginAsGuestHelper.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const password = this.props.errors ? this.props.errors[0] : null;
            this.setState({ errors: { ...this.state.errors, password } });
        }
    }
    componentDidMount(){
        this.props.clearErrors();
    }
    
    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value, errors: { ...this.state.errors, [field]: null } });
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.props.login(this.state).then(() => this.setState(this.state));
        
    }
   
    onBlur(field, e) {
        if (e.target.value.length === 0) {
            this.setState({ errors: { ...this.state.errors, [field]: `${field} cannot be empty` } });
        }
    }

    loginAsGuest () {
        const name = 'guest@email.com'.split('');
        const pw = 'password'.split('');
        const button = document.getElementById('submit');
        this.setState({ username: '', password: '' }, () =>
            this.loginAsGuestHelper(name, pw, button)
        );
    }
    // some inpsiration from spookify: https://github.com/amanpriya-k/spookify/
    loginAsGuestHelper(name, pw, button) {
        if (name.length > 0) {
            this.setState(
                { email: this.state.email + name.shift() }, () => {
                    window.setTimeout(() =>
                        this.loginAsGuestHelper(name, pw, button), 60);
                }
            );
        } else if (pw.length > 0) {
            this.setState(
                { password: this.state.password + pw.shift() }, () => {
                    window.setTimeout(() =>
                        this.loginAsGuestHelper(name, pw, button), 60);
                }
            );
        } else {
            button.click();
        }
    }
    

    render() {
        const { errors } = this.state;
        const inputs = ['email', 'password'].map((field, i) => (
            <SignupComponent
                key={i}
                label={field}
                value={this.state[field]}
                handleChange={this.handleChange}
                errorMessage={errors[field]}
                onBlur={this.onBlur}
                type={'login'}
            />
        ));

        return (
            <form className='log-in'>
                {inputs}
                <br/>
                <button id='submit' onClick={this.handleClick}>Log In</button>
                <button onClick={this.loginAsGuest}>Demo Log In</button>
            </form>
        );
    }
}

export default Login;