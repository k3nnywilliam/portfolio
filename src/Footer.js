import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

function GetYear() {
    return new Date().getFullYear();
}

const FooterPage = () => {
    return (
        <Fragment>
            <Container>
                <div>
                    <br />
                    © {GetYear()} Kenny William Nyallau. All rights reserved.
                </div>
            </Container>
        </Fragment>
    );
}

export default FooterPage;