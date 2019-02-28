import React, { Component } from 'react';

class RecentlyPlayed extends Component {
    render() {
        const played = [1,2,3,4,5,6];
        // const displayPlayed = played.map((el, i) => <div className='Track-item'><li key={i}>{el}</li></div>)
        return (
            <div className='Track-item'>
                track item here
                <span>title</span>
                <br />
                <span>artist</span>
            </div>
        );
    }
}

export default RecentlyPlayed;