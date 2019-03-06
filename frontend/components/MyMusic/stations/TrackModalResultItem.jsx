// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React from 'react';

const TrackModalResultItem = (props) => {
    const { track, id } = props;
    const info = { func: 'Add', mediable_id: _.get(track, 'id', 'No ID'), mediable_type: 'Track', id: id };
    return (
        <div>
            {/* className='search-result-item' */}
            <div className='station-result-item'>
                <div className='station-result-text'>
                    <span className='search-result-title'>{track && track.title}</span>
                    <span className='search-result-type'>Track</span>
                </div>
                <div>
                    <button className='add-to-station' onClick={() => props.addToStation(info)}> + </button>
                </div>
            </div>
        </div>
    );
};

export default TrackModalResultItem;