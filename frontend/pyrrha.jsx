import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchArtist } from './actions/artist_actions';
import { fetchTrack} from './actions/track_actions';
import { fetchAlbum } from './actions/album_actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { fetchStation, postStation, fetchStations, deleteStation, updateStation } from './actions/station_actions';
import {fetchSearchResults} from './actions/search_actions';
import { updateUserFollows } from './actions/user_actions';
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
    library.add(faCircle, faCircleNotch, faSearch);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchTrack = fetchTrack;
    window.fetchArtist = fetchArtist;
    window.fetchAlbum = fetchAlbum;
    window.fetchStation  = fetchStation;
    window.postStation = postStation;
    window.fetchStations = fetchStations;
    window.search = fetchSearchResults;
    window.deleteStation = deleteStation;
    window.updateStation = updateStation;
    window.updateUserFollows = updateUserFollows;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});