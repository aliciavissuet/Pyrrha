// import React from 'react';

// const ArtistResultItem = (props) => {
//     return (
//         <div className='search-result-item'>
//             <span className='search-result-title'>{props.artist.name}</span>
//             <br />
//             <span className='search-result-type'>Song</span>
//             {/* <h3>{props.title}</h3>
//             <h3>{props.title}</h3> */}
//         </div>
//     );
// };

// export default ArtistResultItem;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classNames';
class ArtistResultItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
    }
    toggle() {
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { name, id } = this.props.artist;
        const station_title = name + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Artist' });
    }
    render() {
        const { artist } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        return (
            <div>
                <div className='search-result-item'>
                    <div>
                        <span className='search-result-title'>{artist && artist.name}</span>
                        <br />
                        <span className='search-result-type'>Artist</span>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Start station from artist</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add artist to playlist</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add artist to My Music</button>
                </div>
            </div>
        );
    }


};

export default ArtistResultItem;