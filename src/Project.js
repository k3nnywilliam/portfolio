import React, {Fragment} from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import bio from './images/biology.jpg';

const ProjectPage = () => {
    return [
        <Fragment>
        <div id='portfolio'></div>
        <br/><br/><br/>
        <h1>Featured Projects</h1>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={bio} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={bio} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={bio} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
                
            </Card>
            <Card>
                <Card.Img variant="top" src={bio} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
                
            </Card>
            <Card>
                <Card.Img variant="top" src={bio} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={bio} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </CardGroup>
                    
        </Fragment>
    ];
}

export default ProjectPage;;