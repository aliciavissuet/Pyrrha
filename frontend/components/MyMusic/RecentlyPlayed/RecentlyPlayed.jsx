// import React, { Component } from 'react';

// // class RecentlyPlayed extends Component {
// //     render() {
// //         const played = [1,2,3,4,];
// //         // const displayPlayed = played.map((el, i) => <div className='Track-item'><li key={i}>{el}</li></div>)
// //         return (
// //             <div className='Track-item'>
// //                 track item here
// //                 <br/>
// //                 <span>title</span>
// //                 <br />
// //                 <span>artist</span>
// //                 <br/>
// //                 {/* <button><i className="fas fa-circle-notch"></i></button> */}
// //             </div>
// //         );
// //     }
// // }



// export default RecentlyPlayed;
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
        console.log('recentlyplayed', this.props);
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
        const albums = _.get(this, 'state.albums', {});
        const playlists = _.get(this, 'state.playlists', {});
        const stations = _.get(this, 'state.stations', {});
        const tracks = _.get(this, 'state.tracks', {});
        const tL = _.values(tracks).map((track, i) => {
            return (<ResultItem className='Track-item' data={track} type={'track'} />)
        });
        const pl = _.values(playlists).map((playlist, i) => {
            return (<ResultItem className='Track-item' data={playlist} type={'playlist'} />)
        });
        const st = _.values(stations).map((station, i) => {
            return (<ResultItem className='Track-item' data={station} type={'station'} />)
        });
        const al = _.values(albums).map((album, i) => {
            return (<ResultItem className='Track-item' data={album} type={'station'}/>)
        });

        const itemList = (
            <div className='recent-display-container'>
                {tL}
                {pl}
                {st}
                {al}
            </div>
        )
        let content;
        if (!tracks && !albums && !stations && !playlists || this.props.ui.loading) {
            content = <Loading />
        } else {
            content = itemList
        };
        return (
            < div className = 'Tracks-component' style={{'height':'270px'}}>
                <h1 className='my-music-component-header'>Recently Played</h1>
                { content }

            </div >
        );
    }
}

export default RecentlyPlayed;