import React, {Fragment} from 'react';

const SkillsPage = () => {
    return [
        <Fragment>
            <div id='skills'></div>
            <div className="content2">
            <br/><br/><br/>
      <h1>Skills</h1>
       <h3>Programming</h3>
       <p>Python, Javascript, Java, C#, SQL, Bash</p>
       <h3>Computer vision/Machine Learning</h3>
       <p>Tensorflow, PyTorch, MXNet, OpenCV, Pandas, Scikit Learn, NumPy</p>
       <h3>Geospatial Analysis/Visualization</h3>
       <p>GeoPandas, Folium, Mapbox, LeafletJS, Rasterio</p>
       <h3>Bioinformatics</h3>
       <p>Biopython</p>
       <h3>Web development</h3>
       <p>HTML5, CSS, NodeJS, React, Django, Flask</p>
       <h3>Cloud platforms/tools</h3>
       <p>AWS, GCP, Docker, Terraform, Heroku, Digital Ocean</p>
       <h3>Database</h3>
       <p>PostgreSQL, MongoDB</p>
       <h3>CI/CD</h3>
       <p>CircleCI, Travis CI</p>
    </div>
   
        </Fragment>
    ];
}

export default SkillsPage;