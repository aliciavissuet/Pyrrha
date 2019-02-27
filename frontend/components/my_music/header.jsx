import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import UserLogo from './UserLogo'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggled: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    handleClick() {
        this.props.logout();
    }
    handleOtherClick() {
        this.setState({toggled: false});
    }
    toggle(){
        this.setState({toggled: !this.state.toggled})
    }
    
    render() {
        const linkClassMM = cx('my-music-header-link', { 'selected-link': this.props.location.pathname === '/my-music' });
        const linkClassNP = cx('my-music-header-link', { 'selected-link': this.props.location.pathname === '/now-playing' });
        return (
            <div className='my-music-header' >
                <div className='music-header-left' onClick={this.handleOtherClick}>
                    <div>
                        <Link to='/now-playing' className={linkClassNP}>Now Playing</Link>
                        <Link to='/my-music' className={linkClassMM}>My Music</Link>
                    </div>
                    <div onClick={this.handleOtherClick}>
                        <input type="text" placeholder='Search' className='searchbar'/>
                    </div>
                </div>
                <div className='header-right'>
                    <span><UserLogo 
                        username={this.props.currentUser.username}
                        logout={this.handleClick} 
                        toggled={this.state.toggled}
                        toggle={this.toggle}/></span>
                    
                </div>
            </div>
        );
    }
}

export default Header;