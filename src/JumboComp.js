import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import farm from './images/farm3.jpg';
import corn from './images/corn.gif';
import farming from './images/farming2.gif';
import styles from './index.css';


const Jumbo = () => {
    return [
        <Fragment>
        <div id='home'></div>
        <Image src={farming} className='jumbo' style={styles} fluid />
      </Fragment>
    ];
  }

export default Jumbo;