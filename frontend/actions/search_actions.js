import * as SearchAPIUtil from '../utils/search_api_util';
export const RECEIVE_SEARCH_ARTISTS = 'RECEIVE_SEARCH_ARTISTS';
export const RECEIVE_SEARCH_ALBUMS = 'RECEIVE_SEARCH_ALBUMS';
export const RECEIVE_SEARCH_TRACKS = 'RECEIVE_SEARCH_TRACKS';

export const LOADING_SEARCH = 'LOADING_SEARCH';

const receiveArtists = artists => ({
    type: RECEIVE_SEARCH_ARTISTS,
    artists
});

const receiveTracks = tracks => ({
    type: RECEIVE_SEARCH_TRACKS,
    tracks
});
const receiveAlbums = albums => ({
    type: RECEIVE_SEARCH_ALBUMS,
    albums
});

const loadingTrue = () => ({
    type: LOADING_SEARCH
});

export const fetchSearchResults = term => dispatch => {
    dispatch(loadingTrue());
    SearchAPIUtil.search(term).then(payload => {
        dispatch(receiveArtists(payload.artists));
        dispatch(receiveTracks(payload.tracks));
        dispatch(receiveAlbums(payload.albums));
    });
};

