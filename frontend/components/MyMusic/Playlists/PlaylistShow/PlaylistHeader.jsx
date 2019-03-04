import React from 'react';
import _ from 'lodash';
const PlaylistHeader = (props) => {
    const {playlist} = props;
    return (
        <div className='playlist-header'>
            <h1>{_.get(playlist, 'title', 'No Title Found')}</h1>
            <h3>{_.get(playlist, 'trackIds.length', '0')} songs</h3>
        </div>
    );
};

export default PlaylistHeader;