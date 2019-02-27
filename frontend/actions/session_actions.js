import * as APIUtils from '../utils/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,

});
export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = (user) => dispatch => (
    APIUtils.postSession(user).then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON)))));


export const logout = () => dispatch => (
    APIUtils.deleteSession().then(res => dispatch(logoutCurrentUser()))
);

export const createUser = user => dispatch => (
    APIUtils.postUser(user).then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON)))));

export const demoLogin = () => dispatch => (
    APIUtils.demoLogin().then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON)))));

