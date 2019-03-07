import {RECEIVE_PLAYBAR_LIST} from '../../actions/PlayBarActions';
const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_PLAYBAR_LIST:
            return {list: action.list, title: action.title};
        default: 
            return state;
    }
};

