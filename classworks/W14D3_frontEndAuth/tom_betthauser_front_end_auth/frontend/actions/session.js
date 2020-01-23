import {
    postUser,
    deleteSession,
    postSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
    //user: user // ?
})