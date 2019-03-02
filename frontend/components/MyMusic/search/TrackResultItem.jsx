import React from 'react';

const TrackResultItem = (props) => {
    return (
        <div className='search-result-item'>
            <span className='search-result-title'>{props.track.title}</span>
            <br/>
            <span className='search-result-type'>Song</span>
            {/* <h3>{props.title}</h3>
            <h3>{props.title}</h3> */}
        </div>
    );
};

export default TrackResultItem;