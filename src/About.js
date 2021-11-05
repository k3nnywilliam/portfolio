import React, { Fragment, } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import me from './images/me8.jpg';
import styles from './App.css';

const AboutPage = () => {
    return [
        <Fragment>
            <Container>
                <br /><br />
                <div id='about'></div>
                <h1>About Me</h1>
                <br/>
                <Row>
                <Col md={4}>
                <Image src={me} rounded className={styles.me_pic} />
                </Col>
                    <Col>
                    <br/>
                        <p>
                            My name is Kenny William Nyallau and I am a full stack software developer from Kuching, Malaysia.I was born in the Borneo Island, where I belong to a native tribe called Iban.I graduated from the University of South Australia in 2011 with Masters of Information Technology to
                            pursue a career in software engineering and computer science.
                        </p>
                        <p> In the past, I have worked as research associate at one of the research labs in University South Australia.The research focus at
                            that time was in visuo-haptic augmented reality (AR), data visualization and AR projection mapping.
                            From 2018 to end of 2019, I was the computer vision lead developer with a startup company in Munich, Germany.</p>
                        <p>My past work experiences include developing microservices-based computer vision system for identifying multi-channel live video broadcasts, public interactive visualization, as well as AR mobile apps and head mounted display.</p>
                        <p>My 8 years of professional experience has allowed me to work with many talented collaborators from different parts of the world including United States, Australia, Germany, Japan, South Korea and Singapore.</p>

                        <p>Recently I have decided to switch away from my career in augmented reality to focus more on impactful contribution towards human society as well as the environment.So now I am learning how use geospatial data to identify interesting trends and patterns in domains such as food production, healthcare and crop and livestock monitoring.
                            I believe that such analysis in those domains would prepare us for the impending food and health crisis due to climate emergency (climate change is already happening on the extreme level, so it doesn't make sense to call it climate change anymore).
                        </p>
                        <p>When I'm not in front of my computer, I like to read, draw, practice yoga and learn calisthenics.</p>

                        <br /><br />
                    </Col>
                </Row>
            </Container>
        </Fragment >

    ];
}

export default AboutPage;