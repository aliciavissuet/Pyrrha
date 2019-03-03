import React from 'react';

const StationHeader = (props) => {
    return (
        <div className='station-header'>
            
            <h1>{props.title}</h1>
        </div>
    );
};

export default StationHeader;