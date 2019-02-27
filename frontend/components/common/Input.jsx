import React from 'react';
import cx from 'classnames';

const signupComponent = (props) => {
    const {
        label,
        value,
        handleChange, 
        errorMessage,
        onBlur,
        type
        } = props;

    const placehold = (type==='login') ? label : ''
    const label1 = (type==='login') ? '' : label
    return (
        <label className={type==='login' ? cx('login-label') : cx('signup-label')}>
            {label1}
        <br/>
            <div className={!!errorMessage ? cx('signup-and-error') : ''}>
                <input 
                    className ={cx({}, {
                            'signup-error': errorMessage,
                    })}
                    type={ label === 'password' ? 'password': 'text'} 
                    onChange={handleChange(label)} 
                    value={value}
                    onBlur = {(e) => onBlur(label,e)}
                    placeholder = {placehold}
                />
                {!!errorMessage && type==='login' && <p className='login-error-box'> {errorMessage} </p>}
                {!!errorMessage && type==='signup' && <p className='signup-error-box'> {errorMessage} </p>}
            </div>
        </label>
    )
};


export default signupComponent;