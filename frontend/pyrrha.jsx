import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchArtist } from './actions/artist_actions';
import { fetchTrack} from './actions/track_actions';
import { fetchAlbum } from './actions/album_actions';
// import {fetchAlbum} from './utils/album_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState();
    window.dispatch = store.dispatch;
    window.fetchTrack = fetchTrack;
    window.fetchArtist = fetchArtist;
    window.fetchAlbum = fetchAlbum;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});