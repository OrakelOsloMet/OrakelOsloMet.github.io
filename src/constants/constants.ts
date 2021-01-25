import {objectConditionalByEnvironment} from "../utilities/objectUtilities";

/* ----- Authentication ------ */
export const LOCAL_STORAGE_USER = "user";

/* ----- API ------ */
export const API_BASE_PATH = objectConditionalByEnvironment("http://localhost:8080/api/", "https://orakelqueueservice.herokuapp.com/api/");

//LandingPage
export const QUEUE_PATH = "queue/";
export const CONFIRM_DONE_PATH = QUEUE_PATH + "confirmdone/";

//Subjects
export const SUBJECTS_PATH = "subjects/";
export const CURRENT_SUBJECTS_PATH = SUBJECTS_PATH + "current/";
export const EDIT_SUBJECT_PATH = SUBJECTS_PATH + "edit/"

//Auth
export const AUTH_PATH = "auth/";
export const LOGIN_PATH = AUTH_PATH + "signin";
export const CHECK_TOKEN_PATH = AUTH_PATH + "isTokenValid";

//Resources
export const USER_GUIDE_PATH = API_BASE_PATH + "resources/userguide";

/* ----- Routing ----- */
export const INDEX_ROUTE = "/Orakel_Queue_Client/";
export const ADMIN_ROUTE = INDEX_ROUTE + "Admin";

/* ----- Form Elements ----- */
export enum FormElementType {
    SELECT = "select",
    TEXT = "text",
    RADIO = "radio",
}

export const NEW_SUBJECT = "<New Subject>";


//TODO Add all hardcoded string values to this file
