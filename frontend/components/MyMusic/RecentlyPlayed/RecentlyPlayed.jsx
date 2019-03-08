// import React, { Component } from 'react';



import React, { Component } from 'react';
import ResultItem from './RecentItem';
import Loading from '../../common/Loading';

class RecentlyPlayed extends Component {
    constructor(props) {
        super(props);
        const {tracks, albums, stations, playlists, ui} = this.props;
        this.state = {
            tracks, albums, stations, playlists, ui
        };
    }
    componentDidMount(){
        this.props.fetchRecent();
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            // console.log(this.props);
            const { albums, tracks, stations, playlists, ui } = this.props;
            this.setState({ playlists, stations, albums, tracks, ui });
        }
    }
    render() {
        const {fetchAlbumList, fetchPlaylist, fetchSong, fetchStation} = this.props;
        const albums = _.get(this, 'state.albums', {});
        const playlists = _.get(this, 'state.playlists', {});
        const stations = _.get(this, 'state.stations', {});
        const tracks = _.get(this, 'state.tracks', {});
        const tL = _.values(tracks).map((track, i) => {
            return (<ResultItem className='Track-item' data={track} type={'track'} play={fetchSong}/>)
        });
        const pl = _.values(playlists).map((playlist, i) => {
            return (<ResultItem className='Track-item' data={playlist} type={'playlist'} play={fetchPlaylist}/>)
        });
        const st = _.values(stations).map((station, i) => {
            return (<ResultItem className='Track-item' data={station} type={'station'} play={fetchStation}/>)
        });
        const al = _.values(albums).map((album, i) => {
            return (<ResultItem className='Track-item' data={album} type={'station'} play={fetchAlbumList}/>);
        });
        const items = _.shuffle(al.concat(st, pl, tL));

        const itemList = (
            <div className='recent-display-container'>
                {items}
            </div>
        )
        let content;
        if (!tracks && !albums && !stations && !playlists || this.props.ui.loading) {
            content = <Loading />
        } else {
            content = itemList
        };
        return (
            < div className = 'Tracks-component recent-component' style={{'height':'300px'}}>
                <h1 className='my-music-component-header recent-header'>Recently Played</h1>
                { content }

            </div >
        );
    }
}

export default RecentlyPlayed;