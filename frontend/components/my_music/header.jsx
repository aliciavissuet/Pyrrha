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
    }
    handleClick() {
        this.props.logout();
    }
    
    render() {
        const linkClassMM = cx('my-music-header-link', { 'selected-link': this.props.location.pathname === '/my-music' });
        const linkClassNP = cx('my-music-header-link', { 'selected-link': this.props.location.pathname === '/now-playing' });
        return (
            <div className='my-music-header'>
                <div>
                    <Link to='/now-playing' className={linkClassNP}>Now Playing</Link>
                    <Link to='/my-music' className={linkClassMM}>My Music</Link>
                </div>
                <div>
                    <input type="text" placeholder='search for a song' className='searchbar'/>
                </div>
                <div className='header-right'>
                    <span><UserLogo username={this.props.currentUser.username} logout={this.handleClick}/></span>
                    
                </div>
            </div>
        );
    }
}

export default Header;