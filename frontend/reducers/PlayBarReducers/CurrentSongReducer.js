// import merge from 'lodash';

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_NEXT_SONG:
            return action.track;
        default:
            return state;
    }
};