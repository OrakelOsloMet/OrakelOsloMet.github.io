import axios from "../../axios-api";
import AuthService from "../auth/auth.service";
import swal from "sweetalert";
import {CONFIRM_DONE_PATH, QUEUE_PATH, SUBJECTS_PATH} from "../../constants/constants";
import authHeader from "../auth-header";

class QueueService {

    getQueueData = () => {
        return axios.get(QUEUE_PATH)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                this.errorHandler(error);
                return error;
            })
    };

    postQueueEntry = (queueEntity) => {
        return axios.post(QUEUE_PATH, queueEntity)
            .catch(error => {
                this.errorHandler(error);
            });
    };

    deleteQueueEntryById = (id) => {
        return axios.delete(QUEUE_PATH + id, {headers: authHeader()})
            .catch(error => {
                this.errorHandler(error);
            });
    };

    confirmDone = (id) => {
        return axios.post(CONFIRM_DONE_PATH + id, null, {headers: authHeader()})
            .catch(error => {
                this.errorHandler(error);
            });
    };

    getSubjects = () => {
        return axios.get(SUBJECTS_PATH).then(response => {
            return response.data;
        }).catch(error => {
            this.errorHandler(error);
        });
    };

    errorHandler = (error) => {
        if (error.response.data.message) {

            //This solution is by no means elegant, but the application needs to be published soon.
            //TODO implement Redux to keep track of global state, then redirect the user to login when any error is found
            AuthService.logout();
            swal({
                    title: "Invalid login token",
                    text: "Your login session has expired, or something else went wrong. Please refresh the page and login again. " +
                        "A better user experience in regards to this is in the works, but was not prioritized for the initial " +
                        "production build.",
                    icon: "warning",
                    buttons: true
                }
            );
        }
    }
}

export default new QueueService();