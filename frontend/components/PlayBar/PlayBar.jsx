import React, { Component } from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PlayBar extends Component {
    render() {
                    <FontAwesomeIcon className='icon' icon={["fas", "volume-down"]} />
        const colors = [`#5d85c6`, `#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
        const styles = {
            background: _.sample(colors)
        };
        return (
            <div className='PlayBar' style={styles}>
                <div className='playbar-left'>
                    <h1>picture</h1>
                    <div className='playbar-left-info'>
                        <h2>Song Title</h2>
                        <h2>Artist</h2>
                    </div>
                </div>
                <div className='playbar-middle'>
                    <FontAwesomeIcon className='icon' icon={["fas", "fast-backward"]} />
                    <FontAwesomeIcon className='icon' icon={["fas", "play"]} />
                    <FontAwesomeIcon className='icon' icon={["fas", "fast-forward"]} />
                </div>
                <div className='playbar-right'>
                    <h3>time</h3>
                    <FontAwesomeIcon className='icon' icon={["fas", "volume-down"]} />
                </div>
            </div>
        );
    }
}

export default PlayBar;