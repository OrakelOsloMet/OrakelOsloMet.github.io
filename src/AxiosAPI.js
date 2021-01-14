import axios from "axios";
import {API_BASE_PATH} from "./constants/constants";

const instance = axios.create({
    baseURL: API_BASE_PATH
});

export default instance;