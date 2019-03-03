import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
// const ArtistModalResultItem = (props) => {
    
//     // addToStation(){

//     //     const { artist, id } = this.props;

//     //     const info = { func: 'Add', mediable_id: _.get(artist, 'id', 'No ID'), mediable_type: 'Artist', id: id };
//     //     this.props.addToStation(info);
//     // }
//     return (
//         // const { artist } = this.props;
    //     const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        
    //         <div>
    //             <div className='search-result-item'>
    //                 <div>
    //                     <span className='search-result-title'>{artist && artist.name}</span>
    //                     <br />
    //                     <span className='search-result-type'>Artist</span>
    //                 </div>
    //                 <div>
    //                     <button className='more-options' onClick={this.toggle}>...</button>

    //                 </div>
    //             </div>
    //             <div className={dropdownClass}>
    //                 <button onClick={this.addToStation} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add variety to station</button>
    //                 <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to playlist</button>
    //                 <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to My Music</button>
    //             </div>
    //         </div>
        
    // )


// });

// export default ArtistModalResultItem;

import React from 'react';

const ArtistModalResultItem = (props) => {
    const { artist, id } = props;
    const info = { func: 'Add', mediable_id: _.get(artist, 'id', 'No ID'), mediable_type: 'Artist', id: id };
    
    return (
        <div>
            {/* className='search-result-item' */}
            <div >
                <div>
                     <span className='search-result-title'>{artist && artist.name}</span>
                     <br />
                     <span className='search-result-type'>Artist</span>
                 </div>
                 <div>
                    {/* <FontAwesomeIcon icon={["fas", "circle-notch"]} /> */}
                    {/* onClick={props.addToStation(info)} */}
                    <button className='start-station' onClick={() => props.addToStation(info)}>  + </button>
                 </div>
             </div>
         </div>
    );
};

export default ArtistModalResultItem;