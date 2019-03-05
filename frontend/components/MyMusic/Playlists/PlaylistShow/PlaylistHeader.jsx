// import React from 'react';
import _ from 'lodash';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 


import React, { Component } from 'react';

class PlaylistHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            ontitle: false,
            title: _.get(this, 'props.playlist.title', 'No Title Found'),
            playlist: _.get(this, 'props.playlist', {})
        };
        this.clickTitle = this.clickTitle.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.hoverTitle = this.hoverTitle.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }
    changeTitle(e){
        this.setState({title: e.target.value});
    }
    clickTitle (){
        this.setState({ontitle: true});
    }
    hoverTitle (){
        this.setState({hover: !this.state.hover});
    }
    updateTitle(){
        
        const id = _.get(this, 'state.playlist.id');
        const updated = {title: _.get(this, 'state.title'), id: id};
        this.props.updatePlaylist(updated);
    }
    componentDidUpdate(prevProps){
        if (prevProps !== this.props) {
            this.setState({playlist: this.props.playlist, title: _.get(this, 'props.playlist.title', '')});
        }
    }
    render() {
        const titleCN = cx('hide', {'playlist-title':this.state.hover});
        const icon = cx('white-icon', {'icon ':this.state.hover});
        return (
            <div>
                <div className='playlist-header'>
                    <div className='header-hover'>
                        <input className='' onMouseOver={this.hoverTitle} onMouseOut={this.hoverTitle} value={this.state.title} onChange={this.changeTitle} onBlur={this.updateTitle} />
                        <FontAwesomeIcon className='white-icon' icon={["fas", "pen"]} onClick={() => removeSave(artist.id)} />
                    </div>
                    <h3>{_.get(this, 'state.playlist.trackIds.length', '0')} songs</h3>
                </div>
            </div>
        );
    }
}

export default PlaylistHeader;