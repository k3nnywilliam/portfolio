import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import me from './images/me-again-min.jpg';
import styles from './App.css';

const AboutPage = () => {
    return (
        <>
            <Container>
                <br /><br />
                <div id='about'></div>
                <h1>About Me</h1>
                <br />
                <Row>
                    <Col md={4} >
                        <Image src={me} rounded={true} className={styles.me_pic} />
                    </Col>
                    <Col>
                        <br />
                       
                        <p>When I'm not in front of my computer, I like to work out, read, hiking and probably sleeping. </p>

                        <br /><br />
                    </Col>
                </Row>
            </Container>
        </ >

    );
}

export default AboutPage;