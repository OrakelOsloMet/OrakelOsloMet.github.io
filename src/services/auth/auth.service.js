import axios from "../../axios-api";
import {LOCAL_STORAGE_USER, LOGIN_PATH, SIGNUP_PATH, CHECK_TOKEN_PATH} from "../../constants/constants";


class AuthService {

    login = (username, password) => {
        return axios.post(LOGIN_PATH, {
            username,
            password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(response.data))
            }

            return response.data;
        });
    };

    logout = () => {
        localStorage.removeItem(LOCAL_STORAGE_USER);
    };

    //TODO Add response handling for confirming successfull signup
    register = (username, email, password) => {
        return axios.post(SIGNUP_PATH, {
            username,
            email,
            password
        });
    };

    isUserTokenValid = () => {
        const user = this.getCurrentUser();

        if (user && user.token) {
            return axios.post(CHECK_TOKEN_PATH, user.token).then(response => {
                return response.data;
            });
        }

        return false;
    };

    getCurrentUser = () => {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    };
}

export default new AuthService();