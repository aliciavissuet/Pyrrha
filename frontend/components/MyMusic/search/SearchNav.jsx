import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MainSearch from './MainSearch';
import MainSearchContainer from './MainSearchContainer';
import cx from 'classnames';
class SearchNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResultType:'all'
        };
    }
    changeDisplay (type) {
        this.setState({searchResultType: type});
    }
    render() {
        const {searchResultType} = this.state;
        const linkClassall = cx('my-music-header-link', { 'selected-link': searchResultType === 'all' });
        const linkClassAr = cx('my-music-header-link', { 'selected-link': searchResultType==='artists' });
        const linkClassAl = cx('my-music-header-link', { 'selected-link': searchResultType === 'albums' });
        const linkClasstr = cx('my-music-header-link', { 'selected-link': searchResultType === 'tracks' });
        return (
            <div className='search-content'>
                <div className='search-header'>
                    <button className='search-link' onClick={() => this.changeDisplay('all')} className={linkClassall}>All</button>
                    <button className='search-link' onClick={() => this.changeDisplay('artists')}className={linkClassAr}>Artists</button>
                    <button className='search-link' onClick={() => this.changeDisplay('albums')} className={linkClassAl}>Albums</button>
                    <button className='search-link' onClick={() => this.changeDisplay('tracks')} className={linkClasstr}>Tracks</button>
                    <br/>
                </div>
                <MainSearchContainer searchResultType={this.state.searchResultType}/>

            </div>
        );
    }
}

export default SearchNav;