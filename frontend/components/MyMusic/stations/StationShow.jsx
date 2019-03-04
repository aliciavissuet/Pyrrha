import React, { Component } from 'react';
import _ from 'lodash';
import AlbumStationItem from './AlbumStationItem';
import ArtistStationItem from './ArtistStationItem';
import TrackStationItem from './TrackStationItem';
import Loading from '../../common/Loading';
import { fetchStation } from '../../../actions/station_actions';
import StationHeader from './StationHeader';
import cx from 'classnames';
import SearchModal from './SearchModal';
import ModalContentsContainer from './ModalContentsContainer';

class StationShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            station: null,
            artists: null,
            tracks: null,
            albums: null,
            show: false,
        };
        this.removeTrack = this.removeTrack.bind(this);
        this.removeAlbum = this.removeAlbum.bind(this);
        this.removeArtist = this.removeArtist.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.search = this.search.bind(this);
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
    componentWillUnmount(){
        this.props.clear();
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
    showModal (){
        this.setState({ show: true });
        
    };

    hideModal () {
        this.setState({ show: false });
    };
    search (e){
        if (e.target.value.length === 0) {
            this.props.clearSearch();
        } else {
            this.props.search(e.target.value);

        }
    }

    
   
    render(){
        
        
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
        // const av = cx('modal', { 'modal-show': this.state.show });
        const ol = cx('',{'overlay': this.state.show})
        const olc = ''
        return (
            <div>
                <div className={ol} id='overlay'>{olc}</div>
                <StationHeader title={_.get(station, 'title', 'No Title Found')}/>
                <div className='station-main'>
                <div className='station-main-top'>
                    <h3 className='station-created-from'>Station Created From: </h3>
                        <SearchModal show={this.state.show} handleClose={this.hideModal} id={_.get(station, 'id', 'No id Found')} search={this.search} >
                            <div className='search-modal-header'>
                                <p>Add Variety</p>
                                <br/>
                                <input type="text" placeholder='add variety' onChange={this.search}/>
                            </div>
                            <ModalContentsContainer id={_.get(station, 'id', 'No id Found')}/>
                            {/* <SearchResults /> */}
                        </SearchModal>
                        <button id='btn' className='modal-button' type="button" onClick={this.showModal}>
                            open
                        </button>
                </div>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
                <SearchModal />
            </div>        
        );
    }
    
};

export default StationShow;