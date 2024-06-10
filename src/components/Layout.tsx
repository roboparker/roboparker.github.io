import * as React from "react"
import NavigationBar from './Navbar';
import Copyright from "./Copyright";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <header>
                <NavigationBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Copyright />
            </footer>
        </>
    )
}

export default Layout