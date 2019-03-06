import React, { Component } from 'react';
import RecentlyPlayed from './RecentlyPlayed';

class RecentlyPlayedContainer extends Component {
    render() {
        const played = [1, 2, 3, 4];
        const displayPlayed = played.map((el, i) => {
            return <li><RecentlyPlayed key={i} className='Track-item'/></li>
        })
        const content = (
            <ul className='track-display-container'>
                {displayPlayed}
            </ul>
        )
        return (
            <div className='my-music-recently-played'>
                <h1 className='my-music-component-header'>Recently Played</h1>
                {content}
            </div>
        );
    }
}

export default RecentlyPlayedContainer;