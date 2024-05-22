import * as React from "react"
import NavigationBar from './Navbar';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}

export default Layout