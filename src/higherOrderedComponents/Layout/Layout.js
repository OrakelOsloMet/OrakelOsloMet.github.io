import React, {Component} from 'react';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Login from "../../containers/Login/Login";

class Layout extends Component {

    render() {
        return(
            <>
                <Navbar/>
                <main>
                    <Login/>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;