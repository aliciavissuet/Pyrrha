import React from 'react';
import {Link} from 'react-router-dom';
const Splash = (props) => {
    return (
        <div className='new-session'>
                
                <nav className='splash-nav'>
                    <Link to='/my-music' className='pyrrha-signup'>pyrrha</Link>
                    <div className='right-nav-comp'>
                        <Link to='/signup' className='splash-Sign-up-button'>Sign Up</Link>
                        <Link to='/login' className='splash-Log-in-button'>Log In</Link>
                    </div>
                </nav>
                <div>
                    <h1 className='pyrrha-big'>
                        pyrrha
                    </h1>
                    <h2 className='start-listening'>Start listening for free.</h2>

                </div>
            
        </div>
    )
};
export default Splash;