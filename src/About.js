import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import me from './images/me5.jpg';
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
                        <p>

                            💼 Software developer | Interested in life science, nutrition, healthcare, food security and geospatial visualization
                            ⚡ Fun fact: I belong to a native tribe called Iban in Malaysia and I used to be a 3D artist 🧑‍🎨

                        </p>
                        <p>When I'm not in front of my computer, I like to read, draw, practice yoga and learn calisthenics.</p>

                        <br /><br />
                    </Col>
                </Row>
            </Container>
        </ >

    );
}

export default AboutPage;