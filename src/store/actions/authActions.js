import axios from "../../axios-api";
import * as actionTypes from "./actionTypes";
import {LOGIN_PATH, CHECK_TOKEN_PATH, LOCAL_STORAGE_USER} from "../../constants/constants";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: user.token,
        userId: user.userId,
        userRoles: user.roles
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER);

    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkValidAuth = () => {
    return dispatch => {
        const user = getCurrentUser();

        if (user && user.token) {
            axios.post(CHECK_TOKEN_PATH, user.token).then(response => {
                if (response.data === true) {
                    dispatch(authSuccess(user))
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
                    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(response.data));
                    dispatch(authSuccess(response.data));
                }
            }).catch(error => {
                dispatch(authFail(error.response.data.message))
        });
    }
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
};

export const toggleLoginModal = (visible) => {
    return {
        type: actionTypes.TOGGLE_LOGIN_MODAL,
        visible: visible
    }
};
