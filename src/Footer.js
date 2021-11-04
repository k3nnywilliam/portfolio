import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GetYear(){
    return new Date().getFullYear();
}


const FooterPage = () => {
    return (
        <Fragment>
        <Container>
             <p></p>
        © {GetYear()} Kenny William Nyallau. All rights reserved.
        </Container>
        </Fragment>
    );
}

export default FooterPage;