// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash'
// import cx from 'classnames';
// class AlbumModalResultItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayDropdown: false
//         };
//         this.toggle = this.toggle.bind(this);
//         this.addToStation = this.addToStation.bind(this);
//     }
//     toggle() {
//         this.setState({ displayDropdown: !this.state.displayDropdown });
//     }
//     addToStation() {

//         const { album, id } = this.props;

//         const info = { func: 'Add', mediable_id: _.get(album, 'id', 'No ID'), mediable_type: 'Album', id: id };
//         this.props.addToStation(info);
//     }
//     render() {
//         const { album } = this.props;
//         const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
//         return (
//             <div>
//                 <div className='search-result-item'>
//                     <div>
//                         <span className='search-result-title'>{album && album.title}</span>
//                         <br />
//                         <span className='search-result-type'>Album</span>
//                     </div>
//                     <div>
//                         <button className='more-options' onClick={this.toggle}>...</button>

//                     </div>
//                 </div>
//                 <div className={dropdownClass}>
//                     <button onClick={this.addToStation} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} /> Add variety to station</button>
//                     <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to playlist</button>
//                     <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to My Music</button>
//                 </div>
//             </div>
//         );
//     }


// };

// export default AlbumModalResultItem;

import React from 'react';

const AlbumModalResultItem = (props) => {
    const { album, id } = props;
    const info = { func: 'Add', mediable_id: _.get(album, 'id', 'No ID'), mediable_type: 'Album', id: id };
    return (
        <div>
            {/* className='search-result-item' */}
            <div >
                <div>
                    <span className='search-result-title'>{album && album.title}</span>
                    <br />
                    <span className='search-result-type'>Artist</span>
                </div>
                <div>
                    {/* FontAwesomeIcon icon={["fas", "circle-notch"]} />  */}
                    {/* onClick={props.addToStation(info)} */}
                    <button className='start-station' onClick={() => props.addToStation(info)}> + </button>
                </div>
            </div>
        </div>
    );
};

export default AlbumModalResultItem;