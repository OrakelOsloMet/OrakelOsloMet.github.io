import {RootState} from "../../../store";
import {bindActionCreators, Dispatch} from "redux";
import {auth, clearError, logout} from "../../../store/actions/authActions";
import {connect} from "react-redux";
import Navbar from "./navbar";

const mapStateToProps = (state: RootState) => {
    return {
        isAuthenticated: state.auth.user?.token !== undefined,
        loginFailed: state.auth.error
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        onLoginSubmit: auth,
        clearLoginError: clearError,
        logoutHandler: logout
    }, dispatch);
}

export const NavbarConnected = connect(mapStateToProps, mapDispatchToProps)(Navbar);
