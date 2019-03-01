import React from 'react';

const UserStationItem = (props) => {
    return (
        <div className='Track-item'>
            <h1>{props.station.title}</h1>
        </div>
    );
};

export default UserStationItem;