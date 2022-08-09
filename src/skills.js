import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

const SkillsPage = () => {
    return [
        <Fragment>
            <Container>
            <hr/><br/><br/> 
                <div id='skills'></div>
                <div className="content2">
                    <h1>Skills</h1>
                    <br/>
                    <h3>Programming</h3>
                    <p>Python, Javascript, R, C#, SQL, Bash</p>
                    <h3>Data Analysis/Visualization</h3>
                    <p>Matplotlib, Pandas, Scikit Learn, NumPy, Seaborn, Plotly, D3.js</p>
                    <h3>2D/3D Graphics Visualization</h3>
                    <p>DeckGL, ThreeJS</p>
                    <h3>Geospatial Analysis</h3>
                    <p>Cesium, GeoPandas, Folium, Mapbox, LeafletJS</p>
                    <h3>Web development</h3>
                    <p>HTML5, CSS, Sass, React, Node, Express, Vue, Flask, R Shiny</p>
                    <h3>Cloud platforms/tools</h3>
                    <p>Heroku, Digital Ocean, Netlify, Vercel</p>
                    <h3>CI/CD</h3>
                    <p> Jenkins, CircleCI, Travis CI, GitHub Actions</p>
                </div>
            </Container>
        </Fragment>
    ];
}

export default SkillsPage;