import React, {FC} from 'react';
import NavbarConnected from "../../components/Navigation/Navbar/navbarConnected";
import Footer from "../../components/Navigation/Footer/footer";

const Layout: FC = (props) => {
    return (
        <>
            <NavbarConnected/>
            <main className="mb-5">
                {props.children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;