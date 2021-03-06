import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SignupComponent from '../common/Input';
import { InputTypesEnum, SignupFieldsEnum, ErrorsEnum } from './signup_errors_enum';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        let password = null;
        let username = null;
        let email = null;
        this.props.errors.forEach(err => {
            if (err.includes('email') || err.includes('Email')){
                email = err;
            } else if (err.includes('username') || err.includes('Username')){
                username = err;
            } else if (err.includes('password') || err.includes('Password')){
                password = err;
            }
        });
        

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {
                Password: password,
                Username: username,
                Email: email},
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
        this.demoSignInHelper = this.demoSignInHelper.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    componentDidMount () {
        
        this.props.clearErrors();
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            // const password = this.props.errors && this.props.errors.includes('password') ? this.props.errors[0] : null;
            // const username = this.props.errors && this.props.errors.includes('username') ? this.props.errors[0] : null;
            // const email = this.props.errors && this.props.errors.includes('email') ? this.props.errors[0] : null;
            let password = null;
            let username = null;
            let email = null;
            this.props.errors.forEach(err => {
                if (err.includes('Email') || err.includes('email')) {
                    email = err;
                } else if (err.includes('Username') || err.includes('username')) {
                    username = err;
                } else if (err.includes('Password') || err.includes('password')) {
                    password = err;
                }
            });
            this.setState({errors:
                {password,username,email}});
        }
    }
    
   handleChange(field) {
       return (e) => {
           this.setState({ [field.toLowerCase()]: e.target.value, errors: { ...this.state.errors, [field.toLowerCase()]: null } });
       };
   }
   
   handleClick (e) {
       e.preventDefault();
       const signUpInfo = {
           username: this.state.username,
           password: this.state.password,
           email: this.state.email 
    };
       this.props.createUser(signUpInfo);
       this.setState({
           username: '',
           email: '',
           password: ''});
   }
   
    handleDemoClick() {
        const un = 'Guest'.split('');
        const email = 'guest@email.com'.split('');
        const pw = 'password'.split('');
        this.setState({ username: '', password: '', email: '' }, () =>
            this.demoSignInHelper(un, email, pw)
        );
    }

    demoSignInHelper(un, email, pw) {
        if (un.length > 0) {
            this.setState(
                { username: this.state.username + un.shift() }, () => {
                    window.setTimeout(() =>
                        this.demoSignInHelper(un, email, pw), 60);
                }
            );
        } else if (email.length > 0) {
            this.setState(
                { email: this.state.email + email.shift() }, () => {
                    window.setTimeout(() =>
                        this.demoSignInHelper(un, email, pw), 60);
                }
            );
        } else if (pw.length > 0) {
            this.setState(
                { password: this.state.password + pw.shift() }, () => {
                    window.setTimeout(() =>
                        this.demoSignInHelper(un, email, pw), 60);
                }
            );
        } else {
            this.props.demoLogin();
        }
    }

   onBlur( field,e ) {
       
       if (e.target.value.length === 0){
           let error = this.state.errors;
           error[[field.toLowerCase()]] = `${field} ${ErrorsEnum.CANNOT_BE_BLANK}`;
           this.setState({errors: error});
       }
       //...this.state.errors[[field]], 
   }
   
    render() {
        const { errors} = this.state;

        const inputs = Object.values(SignupFieldsEnum).map( (field, i) => (
            <SignupComponent
                key={i} 
                label={field} 
                value={this.state[[field.toLowerCase()]]} 
                handleChange={this.handleChange} 
                errorMessage={errors[[field.toLowerCase()]]} 
                onBlur={this.onBlur} 
                type='signup'
                />
            ));        

        return (
            <form className='sign-up'>
                {inputs}
                <button onClick={this.handleClick}>Sign Up</button>
                {/* <button onClick={this.handleDemoClick}>Demo Sign Up</button> */}
            </form>
        );
    }
}

export default withRouter(Signup);

