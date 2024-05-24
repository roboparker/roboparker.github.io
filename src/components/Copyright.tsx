import * as React from "react"
import {Container} from "react-bootstrap";


const Copyright: React.FC = () => {
    return (
        <section className="text-white bg-dark pt-2 pb-2 text-md-center">
            <Container>
                &copy; {new Date().getFullYear()} All rights reserved
            </Container>
        </section>
    )
}

export default Copyright