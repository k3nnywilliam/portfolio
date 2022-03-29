import React from 'react';
import { Container } from 'react-bootstrap';

function GetYear() {
    return new Date().getFullYear();
}

const FooterPage = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <br />
                    © {GetYear()} Kenny William Nyallau. All rights reserved.
                </div>
            </div>
        </>
    );
}

export default FooterPage;