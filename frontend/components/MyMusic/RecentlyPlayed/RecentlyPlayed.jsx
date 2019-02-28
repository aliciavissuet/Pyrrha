import React, { Component } from 'react';

class RecentlyPlayed extends Component {
    render() {
        const played = [1,2,3,4,5,6];
        // const displayPlayed = played.map((el, i) => <div className='Track-item'><li key={i}>{el}</li></div>)
        return (
            <div className='Track-item'>
                track item here
                <br/>
                <span>title</span>
                <br />
                <span>artist</span>
                <br/>
                <button><i class="fas fa-circle-notch"></i></button>
            </div>
        );
    }
}

export default RecentlyPlayed;