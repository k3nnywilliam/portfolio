import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import corn from './images/corn.gif';
import styles from './index.css';


const CornPage = () => {
    return [
        <Fragment>
        <div id='home'></div>
        <Image src={corn} className='jumbo' style={styles} fluid />
      </Fragment>
    ];
  }

export default CornPage;