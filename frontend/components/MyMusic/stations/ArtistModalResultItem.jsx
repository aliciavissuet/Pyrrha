import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import React from 'react';

const ArtistModalResultItem = (props) => {
    const { artist, id } = props;
    const info = { func: 'Add', mediable_id: _.get(artist, 'id', 'No ID'), mediable_type: 'Artist', id: id };
    
    return (
        <div>
            {/* className='search-result-item' */}
            <div className='station-result-item'>
                <div className='station-result-text'v>
                     <span className='search-result-title'>{artist && artist.name}</span>
                     <span className='search-result-type'>Artist</span>
                 </div>
                 <div>
                    <button className='start-station' onClick={() => props.addToStation(info)}>  + </button>
                 </div>
             </div>
         </div>
    );
};

export default ArtistModalResultItem;