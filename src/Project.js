import React, { Fragment } from 'react';
import { Card, CardGroup, Button, Row, Col, Container } from 'react-bootstrap';
import map from './images/map3-min.jpg';
import rov from './images/rov.jpg';
import genoken from './images/genoken.jpg';
import bovine from './images/bovine.jpg';
import stroke from './images/stroke2.jpg'
import brain from './images/brain2.jpg';
import nutrition from './images/nutrition2.jpg';
import heart from './images/heart2.jpg';
import regression from './images/regression.jpg';
import wheat from './images/wheat.jpg';
import styles from './index.css';

const ProjectPage = () => {
    return [
        <Fragment>
        <Container>
        
        <br/><br/> 
        <hr/>
            <div id='portfolio'></div>
            <h1>Featured Projects</h1>
            <br/><br/>
            <CardGroup className={styles}>
                <Row>
                    <Col sm>
                        <Card >
                            <Card.Img variant="top" src={map} />
                            <Card.Body>
                                <Card.Title>Tracking domestic ducks movement in poultry market chain</Card.Title>
                                <Card.Text>
                                This is a map web-application demo and data analysis on using data from Movebank website and LeafletJS. 
                                </Card.Text>
                                <a href="https://github.com/k3nnywilliam/duck-avian-map-analysis" target='_blank' rel='noreferrer'>
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card className={styles.card_text}>
                            <Card.Img variant="top" src={bovine} />
                            <Card.Body>
                                <Card.Title className={styles.card_text}>FAOSTAT data analysis on enteric fermentation
                                </Card.Title>
                                <Card.Text className={styles.card_text}>
                                    These notebooks are reproduction of FAOSTAT data analysis on bovine's enteric fermentation and its effects on the world's climate.
                                </Card.Text>
                                <a href="https://github.com/k3nnywilliam/faostat-data-analysis" target='_blank' rel='noreferrer'>
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                       
                    </Col>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={rov} />
                            <Card.Body>
                                <Card.Title>Web-based Lidar scan viewer of the wreck of the City of Genoa </Card.Title>
                                <Card.Text>
                                The purpose of this project is to develop a web-based Lidar scan viewer of the wreck of the City of Genoa in Lake Huron, Detroit. This project was made with CesiumJS and Resium.
                                </Card.Text>
                                <a href="https://genoa-ship.herokuapp.com/" target='_blank' rel='noreferrer'>
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={wheat} />
                            <Card.Body>
                                <Card.Title>Data Visualization on Effects of Climate Change on Food Supply</Card.Title>
                                <Card.Text>
                                Reproducing studies on climate change effects on food production into a web-based data visualization.
                                </Card.Text>
                                <a href="https://github.com/k3nnywilliam/climate-change-food-supply" target="_blank" rel="noreferrer">
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={brain} />
                            <Card.Body>
                                <Card.Title>Web-based DICOM Viewer</Card.Title>
                                <Card.Text>
                                This is a web-based volumetric DICOM viewer application using VTKJS deployed on Heroku server. 
                                </Card.Text>
                                <a href="https://kennyvolumeviewer.herokuapp.com" target="_blank" rel="noreferrer">
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={nutrition} />
                            <Card.Body>
                                <Card.Title>Exploratory Data Analysis on Nutrition</Card.Title>
                                <Card.Text>
                                Data science project based on several Kaggle datasets on food nutrition and health. 
                                </Card.Text>
                                <a href="https://github.com/k3nnywilliam/data-science-nutrition" target="_blank" rel="noreferrer">
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={heart} />
                            <Card.Body>
                                <Card.Title>Heart Failure Prediction</Card.Title>
                                <Card.Text>
                                EDA and machine learning model selection on using patients' electronic health records to predict heart failure. 
                                </Card.Text>
                                <a href="heart-failure.html" target='_blank' rel='noreferrer'>
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={stroke} />
                            <Card.Body>
                                <Card.Title>Stroke Prediction</Card.Title>
                                <Card.Text>
                                Exploratory data analysis on stroke prediction to predict whether a patient is likely to get stroke based on the input parameters like gender, age, various diseases, and smoking status. 
                                </Card.Text>
                                <a href="eda-stroke.html" target='_blank' rel='noreferrer'>
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={genoken} />
                            <Card.Body>
                                <Card.Title>Genoken</Card.Title>
                                <Card.Text>
                                Genoken" is an open source general-purpose bioinformatics toolkit for basic sequencing analysis written in Python. 
                                </Card.Text>
                                <a href="https://github.com/k3nnywilliam/genoken" target="_blank" rel="noreferrer">
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                            <Card.Img variant="top" src={regression} />
                            <Card.Body>
                                <Card.Title>Medical Cost Prediction</Card.Title>
                                <Card.Text>
                                Using regression models to predict the medical insurance cost for patients based on their electronic health records. 
                                </Card.Text>
                                <a href="medical-cost.html" target='_blank' rel='noreferrer'>
                                <Button variant="outline-dark">View</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                           
                            <Card.Body>
                                <Card.Title>Coming soon</Card.Title>
                                <Card.Text>
                                Coming soon.
                                </Card.Text>
                               
                                <Button variant="outline-dark">View</Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card>
                           
                            <Card.Body>
                                <Card.Title>Coming soon</Card.Title>
                                <Card.Text>
                                Coming soon.
                                </Card.Text>
                               
                                <Button variant="outline-dark">View</Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </CardGroup>
            <br/>
            <br/>
            <hr/>
            </Container>
            
        </Fragment>
    ];
}

export default ProjectPage;;