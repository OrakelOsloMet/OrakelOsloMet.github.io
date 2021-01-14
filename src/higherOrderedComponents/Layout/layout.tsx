import React, {Component} from 'react';
import Navbar from "../../components/Navigation/Navbar/navbar";

class Layout extends Component {

    render() {
        return(
            <>
                <Navbar/>
                <main className="mb-5">
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;