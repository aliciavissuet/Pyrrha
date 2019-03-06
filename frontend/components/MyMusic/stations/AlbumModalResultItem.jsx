// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash'


import React from 'react';

const AlbumModalResultItem = (props) => {
    const { album, id } = props;
    const info = { func: 'Add', mediable_id: _.get(album, 'id', 'No ID'), mediable_type: 'Album', id: id };
    return (
        <div>
            {/* className='search-result-item' */}
            <div className='station-result-item' >
                <div className='station-result-text'>
                    <span className='search-result-title'>{album && album.title}</span>
                    <span className='search-result-type'>Artist</span>
                </div>
                <div>
                    <button className='add-to-station' onClick={() => props.addToStation(info)}> + </button>
                </div>
            </div>
        </div>
    );
};

export default AlbumModalResultItem;