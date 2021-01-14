import React, {Component} from 'react';
import {NavbarConnected} from "../../components/Navigation/Navbar/navbarConnected";

class Layout extends Component {

    render() {
        return(
            <>
                <NavbarConnected/>
                <main className="mb-5">
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;