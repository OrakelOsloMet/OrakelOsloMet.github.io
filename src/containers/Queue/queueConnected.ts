import {RootState} from "../../store";
import {bindActionCreators, Dispatch} from "redux";
import {addToQueue, deleteFromQueue, doneInQueue, fetchQueue} from "../../store/actions/queueActions";
import {connect} from "react-redux";
import Queue from "./queue";

const mapStateToProps = (state: RootState) => {
    return {
        isAuthenticated: state.auth.user?.token != null,
        userRoles: state.auth.user ? state.auth.user.roles : [],
        queueData: state.queue.queueData,
        subjects: state.queue.subjectData,
        loading: state.queue.loading,
        error: state.queue.error
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        addQueueEntity: addToQueue,
        deleteQueueEntity: deleteFromQueue,
        confirmDoneEntity: doneInQueue,
        pollingFunction: fetchQueue
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);