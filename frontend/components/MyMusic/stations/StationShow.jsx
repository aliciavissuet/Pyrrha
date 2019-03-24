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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class StationShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            station: null,
            artists: null,
            tracks: null,
            albums: null,
            show: false,
            popup: false,
        };
        this.removeTrack = this.removeTrack.bind(this);
        this.removeAlbum = this.removeAlbum.bind(this);
        this.removeArtist = this.removeArtist.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.search = this.search.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.addFollow= this.addFollow.bind(this);
        this.showNotification = this.showNotification.bind(this);
    }
    componentDidMount(){
        this.props.fetchStation(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const {artists, tracks, albums} = this.props;
            // const filteredArtists = Object.keys(artists).filter(id => _.get(this, 'props.station.artistIds', [])
            //     .includes(id)).reduce((obj, id) => {obj[id] = artists[id]; return obj;}, {});
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
        
        let newArtists = delete this.state.artists[id];
        this.setState({artists: newArtists});
    }
    showModal (){
        this.setState({ show: true });
        
    }

    hideModal () {
        this.setState({ show: false });
    }
    search (e){
        if (e.target.value.length === 0) {
            this.props.clearSearch();
        } else {
            this.props.search(e.target.value);

        }
    }
    showNotification() {
        document.getElementById("note").style.display = "block";
        setTimeout(function () {
            document.getElementById("note").style.display = "none";
        }, 3000);
    }
    addFollow(info){
        // this.setState({popup: true});
        this.showNotification();
        this.props.addFollow(info);
    }
    closePopup(){
        this.setState({popup: false});
    }
    
   
    render(){
        
        
        const {station,  postStation, playSong, playStation} = this.props;
        console.log(station);
        const {artists, albums, tracks} = this.state;
        
        
        const stationArtists = _.values(artists).filter(artist => _.get(station, 'artistIds', []).includes(artist.id)).map((artist, i) => <li key={i}><ArtistStationItem artist={artist} postStation={postStation} updateStation={this.props.updateStation} userId={this.props.userId} addFollow={this.addFollow}removeArtist={this.removeArtist} id={_.get(station, 'id', 'No ID')}/></li>)
        const stationTracks = _.values(tracks).filter(track => _.get(station, 'trackIds', []).includes(track.id)).map((track, i) => <li key={i}><TrackStationItem track={track} postStation={postStation} updateStation={this.props.updateStation} userId={this.props.userId} addFollow={this.addFollow}removeTrack={this.removeTrack}id={_.get(station, 'id', 'No ID')}/></li>)
        const stationAlbums = _.values(albums).filter(album => _.get(station, 'albumIds', []).includes(album.id)).map((album, i) => <li key={i}><AlbumStationItem album={album} postStation={postStation} updateStation={this.props.updateStation} userId={this.props.userId} addFollow={this.addFollow} removeAlbum={this.removeAlbum} id={_.get(station, 'id', 'No ID')} /></li>)
        //  => <li key={i}><AlbumStationItem album={album} updateStation={this.props.updateStation} userId={this.props.userId} addFollow={this.addFollow} removeAlbum={this.removeAlbum} id={_.get(station, 'id', 'No ID')} /></li>)
        // 
        console.log(_.get(station, 'albumIds', []))
        const stations = (
            <ul >
                {stationArtists}
                {stationTracks}
                {stationAlbums}
            </ul>
        )
        const popup = cx('hide-popup', {'popup': this.state.popup});
        const content = (station) ? stations : <Loading />
        // const av = cx('modal', { 'modal-show': this.state.show });
        const ol = cx('',{'overlay': this.state.show})
        const olc = ''
        return (
            <div>
                <div className={ol} id='overlay'>{olc}</div>
                <StationHeader title={_.get(station, 'title', 'No Title Found')}/>
                <FontAwesomeIcon onClick={() => playStation(station.id)} className='play-large-st icon' icon={["fas", "play"]} />    

                <div className='station-main'>
                <div className='station-main-top'>
                    <h3 className='station-created-from'>Station Created From: </h3>
                        <SearchModal show={this.state.show} handleClose={this.hideModal} id={_.get(station, 'id', 'No id Found')} search={this.search} >
                            <div className='search-modal-header'>
                                <h1>Add Variety</h1>
                                <br/>
                                <h4>Add Artists, Songs, or Albums to this station </h4>
                                <br/>
                                <input type="text" placeholder='add variety' onChange={this.search}/>
                            </div>
                            <ModalContentsContainer id={_.get(station, 'id', 'No id Found')}/>
                            {/* <SearchResults /> */}
                        </SearchModal>
                        <button id='btn' className='modal-button' type="button" onClick={this.showModal}>
                            + Add Variety
                        </button>
                </div>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
                <SearchModal />
                <div className={popup} onClick={this.closePopup}>
                    <div className='message'>
                        <FontAwesomeIcon className='icon' icon={["fas", "check"]} />
                        <p>Successful save</p>
                    </div>
                    <div className='close' >
                        <p>x</p>
                    </div>
                </div>
            </div>        
        );
    }
    
};

export default StationShow;