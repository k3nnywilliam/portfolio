import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import farm from './images/farm3.jpg';
import styles from './index.css';


const Jumbo = () => {
    return [
        <Fragment>
        <div id='home'><br/></div>
        <Image src={farm} className='jumbo' style={styles} fluid />
      </Fragment>
    ];
  }

export default Jumbo;