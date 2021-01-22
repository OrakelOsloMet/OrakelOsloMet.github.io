import {RootState} from "../../../store";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import SubjectForm from "./subjectForm";

const mapStateToProps = (state: RootState) => {
    return {
        subjects: state.queue.subjectData,
        loading: state.queue.loading,
        error: state.queue.error
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectForm);