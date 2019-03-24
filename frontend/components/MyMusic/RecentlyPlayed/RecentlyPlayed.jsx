// import React, { Component } from 'react';



import React, { Component } from 'react';
import ResultItem from './RecentItem';
import Loading from '../../common/Loading';

class RecentlyPlayed extends Component {
    constructor(props) {
        super(props);
        const {tracks, albums, stations, playlists, ui} = this.props;
        const num = Object.keys(tracks).length + 
            Object.keys(albums).length + Object.keys(stations).length +
            Object.keys(playlists).length;
        this.state = {
            tracks, albums, stations, playlists, ui, num, selectedI: Math.floor(num/2)
        };
        this.selectRecent = this.selectRecent.bind(this);
    }
    componentDidMount(){
        this.props.fetchRecent();
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            // console.log(this.props);

            const { albums, tracks, stations, playlists, ui } = this.props; 
            const num = Object.keys(tracks).length +
                Object.keys(albums).length + Object.keys(stations).length +
                Object.keys(playlists).length ;

            this.setState({ playlists, stations, albums, tracks, ui, num, selectedI: Math.floor(num/2)  });
            console.log(this.state.num);
        }
    }
   
    selectRecent(i){
        console.log('here');
        this.setState({selectedI: i});
    }
    
    

    render() {
        const {fetchAlbumList, fetchPlaylist, fetchSong, fetchStation} = this.props;
        const albums = _.get(this, 'state.albums', {});
        const playlists = _.get(this, 'state.playlists', {});
        const stations = _.get(this, 'state.stations', {});
        const tracks = _.get(this, 'state.tracks', {});
        const tL = _.values(tracks).map((track, i) => {
            
            return (<ResultItem className='Track-item' data={track} type={'track'} play={fetchSong} lp={Date.parse(track.createdAt)}/>)
        });
        const pl = _.values(playlists).map((playlist, i) => {
            return (<ResultItem className='Track-item' data={playlist} type={'playlist'} play={fetchPlaylist} lp={Date.parse(playlist.createdAt)}/>)
        });
        const st = _.values(stations).map((station, i) => {
            return (<ResultItem className='Track-item' data={station} type={'station'} play={fetchStation} lp={Date.parse(station.createdAt)}/>)
        });
        const al = _.values(albums).map((album, i) => {
            return (<ResultItem className='Track-item' data={album} type={'station'} play={fetchAlbumList} lp={Date.parse(album.createdAt)}/>);
        });
        const items = (al.concat(st, pl, tL));
       
        items.sort(function (a, b) {
            return b.props.lp - a.props.lp;
        });
        
        
        
        const classMap = {
            '-8': 'hideLeft',
            '-7': 'hideLeft',
            '-6': 'hideLeft',
            '-5': 'hideLeft',
            '-4': 'hideLeft',
            '-3': 'hideLeft',
            '-2': 'prevLeftSecond',
            '-1': 'prev',
            '0': 'selected-car',
            '1': 'next',
            '2': 'nextSecondRight',
            '3': 'hideRight',
            '4': 'hideRight',
            '5': 'hideRight',
            '6': 'hideRight',
            '7': 'hideRight',
            '8': 'hideRight',
            '9': 'hideRight'
        }
        let itemsWithIndex = items.map((item, i) => <ResultItem className='Track-item' data={item.props.data} type={item.props.type} play={item.props.play} lp={item.props.lp} index={i} cn={classMap[parseInt(i)-this.state.selectedI]} selectRecent={this.selectRecent} left={this.state.num}/>)

        const itemList = (
            <div id='carousel'>
                {itemsWithIndex}
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