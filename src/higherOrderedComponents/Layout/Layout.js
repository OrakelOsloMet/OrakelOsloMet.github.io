import React, {Component} from 'react';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Footer from "../../components/Navigation/Footer/Footer";
import Login from "../../containers/Login/Login";

class Layout extends Component {
    state = {
        showModal: false,
    };

    closeModalHandler = () => {
        this.setState({showModal: false})
    };

    render() {
        return(
            <>
                <Navbar handleLoginClick = {() => this.setState({showModal: true})} handleLogoutClick={this.props.logoutHandler} user={this.props.user}/>
                <main>
                    <Login show={this.state.showModal} onHide={this.closeModalHandler} loginHandler={this.props.loginHandler}/>
                    {this.props.children}
                </main>
                <Footer versionNumber={this.props.versionNumber}/>
            </>
        );
    }
}

export default Layout;