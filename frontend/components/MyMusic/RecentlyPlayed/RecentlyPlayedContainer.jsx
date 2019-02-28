import React, { Component } from 'react';
import RecentlyPlayed from './RecentlyPlayed';

class RecentlyPlayedContainer extends Component {
    render() {
        const played = [1, 2, 3, 4, 5, 6];
        const displayPlayed = played.map((el, i) => {
            return <li><RecentlyPlayed key={i} className='Track-item'/></li>
        })
        const content = (
            <ul className='track-display-container'>
                {displayPlayed}
            </ul>
        )
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default RecentlyPlayedContainer;