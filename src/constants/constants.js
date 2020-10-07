/* ----- Authentication ------ */
export const LOCAL_STORAGE_USER = "user";

/* ----- API ------ */

export const API_BASE_PATH = process.env.NODE_ENV === "production" ? "https://orakelqueueservice.herokuapp.com/api/" : "http://localhost:8080/api/";

//Queue
export const QUEUE_PATH = "queue/";
export const CONFIRM_DONE_PATH = QUEUE_PATH + "confirmdone/";

//Subjects
export const SUBJECTS_PATH = "subjects/";

//Auth
export const AUTH_PATH = "auth/";
export const LOGIN_PATH = AUTH_PATH + "signin";
export const SIGNUP_PATH = AUTH_PATH + "signup";
export const CHECK_TOKEN_PATH = AUTH_PATH + "isTokenValid";

//TODO Add all hardcoded string values to this file
