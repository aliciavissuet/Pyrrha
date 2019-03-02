import React from 'react';

const ArtistResultItem = (props) => {
    return (
        <div className='search-result-item'>
            <span className='search-result-title'>{props.artist.name}</span>
            <br />
            <span className='search-result-type'>Song</span>
            {/* <h3>{props.title}</h3>
            <h3>{props.title}</h3> */}
        </div>
    );
};

export default ArtistResultItem;