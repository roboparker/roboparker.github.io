import * as React from "react"
import NavigationBar from './Navbar';
import Copyright from "./Copyright";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
            <Copyright />
        </>
    )
}

export default Layout