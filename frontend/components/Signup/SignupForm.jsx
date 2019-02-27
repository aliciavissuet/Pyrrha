import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SignupComponent from '../common/Input';
import { InputTypesEnum, SignupFieldsEnum, ErrorsEnum } from './signup_errors_enum';
class Signup extends React.Component {
    constructor(props) {
        super(props);

        const password = this.props.errors ? this.props.errors[0] : null;

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {password},
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            const password = this.props.errors ? this.props.errors[0] : null;
            this.setState({errors:{...this.state.errors, password}});
        }
    }
    
   handleChange(field) {
       return (e) => {
           this.setState({ [field]: e.target.value, errors: { ...this.state.errors, [field]: null } });
       };
   }
   
   handleClick (e) {
       e.preventDefault();
       this.props.createUser(this.state)
       this.setState({
           username: '',
           email: '',
           password: ''});
   } 

   onBlur( field,e ) {
       if (e.target.value.length === 0){
           this.setState({errors:{...this.state.errors, [field]:`${field} ${ErrorsEnum.CANNOT_BE_BLANK}`}});
       }
   }
   
    render() {
        const { errors } = this.state;

        const inputs = Object.values(SignupFieldsEnum).map( field => (
            <SignupComponent 
                label={field} 
                value={this.state[field]} 
                handleChange={this.handleChange} 
                errorMessage={errors[field]} 
                onBlur={this.onBlur} 
                type='signup'
                />
            ));        

        return (
            <form className='sign-up'>
                {inputs}
                <button onClick={this.handleClick}>Sign Up</button>
            </form>
        );
    }
}

export default withRouter(Signup);

