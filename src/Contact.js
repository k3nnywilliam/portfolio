import React, { Fragment } from 'react';
import { Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './App.css';

const ContactPage = () => {
    return (
        <Fragment>
            <Container>
            <div className={styles.Contact}>
                <div id='contact'></div>
                <hr />
                <h1>Contact Me</h1>
                <br />
    
                <Row>
                <p>
                <a href="https://www.linkedin.com/in/kennyallau/" role="button"><FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.FAIcon} /></a> Linkedin
                </p>
                </Row>
                <Row>
                <p>
                <a href="mailto:k3nnywilliam@gmail.com" role="button"><FontAwesomeIcon icon={faEnvelope} size="2x" className={styles.FAIcon}/></a> Email
                </p>
                </Row>
                <Row>
                <p>
                <a href="https://github.com/k3nnywilliam" role="button"><FontAwesomeIcon icon={faGithub} size="2x" className={styles.FAIcon}/></a> Github
                </p>
                </Row>
               </div>
            </Container>
        </Fragment>
    );
}

export default ContactPage;