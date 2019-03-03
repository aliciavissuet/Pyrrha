import React, { Component } from 'react';
import _ from 'lodash';
import AlbumStationItem from './AlbumStationItem';
import ArtistStationItem from './ArtistStationItem';
import TrackStationItem from './TrackStationItem';
import Loading from '../../common/Loading';
import { fetchStation } from '../../../actions/station_actions';
import StationHeader from './StationHeader';
import cx from 'classnames';

class StationShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            station: null,
            artists: null,
            tracks: null,
            albums: null,
            toggle: false,
        };
        this.removeTrack = this.removeTrack.bind(this);
        this.removeAlbum = this.removeAlbum.bind(this);
        this.removeArtist = this.removeArtist.bind(this);
        this.openVariety = this.openVariety.bind(this);
        this.closeVariety = this.closeVariety.bind(this);
    }
    componentDidMount(){
        this.props.fetchStation(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const {artists, tracks, albums} = this.props;
            this.setState({artists, tracks, albums });
        }
    }
    removeTrack(id){
        newTracks = delete this.state.tracks[id];
        this.setState({tracks: newTracks});
    }
    removeAlbum(id) {
        newAlbums = delete this.state.albums[id];
        this.setState({ albums: newAlbums });
    }
    removeArtist(id) {
        newArtists = delete this.state.artists[id];
        this.setState({artists: newArtists});
    }
    openVariety(){
        // const av = document.getElementById('add-variety')
        this.setState({toggle: true});
    }
    closeVariety(){
        this.setState({toggle: false});
    }
   
    render(){
        const variety = document.getElementById('myModal');
        window.onclick = function (event) {
            if (event.target == variety) {
                variety.style.display = "none";
            }
        };
        
        const {station} = this.props;
        console.log(station);
        const {artists, albums, tracks} = this.state;
        
        
        const stationArtists = _.values(artists).map((artist, i) => <li key={i}><ArtistStationItem artist={artist} updateStation={this.props.updateStation} removeArtist={this.removeArtist} id={_.get(station, 'id', 'No ID')}/></li>)
        const stationTracks = _.values(tracks).map((track, i) => <li key={i}><TrackStationItem track={track} updateStation={this.props.updateStation} removeTrack={this.removeTrack}id={_.get(station, 'id', 'No ID')}/></li>)
        const stationAlbums = _.values(albums).map((album, i) => <li key={i}><AlbumStationItem album={album} updateStation={this.props.updateStation} removeAlbum={this.removeAlbum}id={_.get(station, 'id', 'No ID')}/></li>)
        const stations = (
            <ul >
                {stationArtists}
                {stationTracks}
                {stationAlbums}
            </ul>
        )
        const content = (station) ? stations : <Loading />
        const av = cx('modal', { 'modal-show': this.state.toggle });
        return (
            <div>
                <StationHeader title={_.get(station, 'title', 'No Title Found')}/>
                <div className='station-main'>
                <div className='station-main-top'>
                    <h3 className='station-created-from'>Station Created From: </h3>
                    <button onClick={this.openVariety} id="add-variety" onBlur={this.closeVariety}>Add Variety</button>
                </div>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
                <div id="add-variety" class={av} onClick={this.openVariety}>
                    <div class="modal-content" onClick={this.closeVariety} onBlur={this.closeVariety}>
                        <span class="close">&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>
            </div>        
        );
    }
    
};

export default StationShow;