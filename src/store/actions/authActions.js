import axios from "../../axios-api";
import * as actionTypes from "./actionTypes";
import {LOCAL_STORAGE_USER_ID, LOGIN_PATH, CHECK_TOKEN_PATH, LOCAL_STORAGE_TOKEN} from "../../constants/constants";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_ID);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);

    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkValidAuth = () => {
    return dispatch => {
        const token = this.getCurrentToken();

        if (token) {
            axios.post(CHECK_TOKEN_PATH, token).then(response => {
                if (response.data === true) {
                    dispatch(authSuccess(token, localStorage.getItem(LOCAL_STORAGE_USER_ID)))
                } else {
                    dispatch(logout())
                }
            });
        } else {
            dispatch(logout())
        }
    }
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());

        axios.post(LOGIN_PATH, {username, password})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem(LOCAL_STORAGE_USER_ID, JSON.stringify(response.data.id));
                    localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(response.data.token));
                    dispatch(authSuccess(response.data.token, response.data.id));
                }
            }).catch(error => {
            //TODO make sure the correct attribute is being passed to authFail. I.e, test this later.
            dispatch(authFail(error))
        });
    }
};

export const getCurrentToken = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN));
};
