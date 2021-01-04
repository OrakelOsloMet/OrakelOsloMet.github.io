import {LOCAL_STORAGE_USER} from "../constants/constants";

export default function authHeader() {

    const USER = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER)!);

    if (USER && USER.token) {
        return { Authorization: "Bearer " + USER.token };
    } else {
        return {};
    }
}
