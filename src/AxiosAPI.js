import axios from "axios";
import {API_BASE_PATH} from "./constants/Constants";

const instance = axios.create({
    baseURL: API_BASE_PATH
});

export default instance;