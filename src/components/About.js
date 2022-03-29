import React from 'react';
import { Image } from 'react-bootstrap';
import me from '../images/me4.jpg';

export default function AboutMe() {
    return (
        <>
            <div className='container'>
                <br /><br />
                <div id='about'></div>
                <h1>About Me</h1>

                <div className='row'>
                    <div className='col md-4'>
                        <Image src={me} rounded className='image-fluid'>
                        </Image>
                    </div>
                    <div className='col md-4'>

                        <p>

                            💼 Software developer | Interested in life science, nutrition, healthcare, food security and geospatial visualization
                            ⚡ Fun fact: I belong to a native tribe called Iban in Malaysia and I used to be a 3D artist 🧑‍🎨

                        </p>
                        <p>When I'm not in front of my computer, I like to read, draw, practice yoga and learn calisthenics.</p>

                    </div>


                </div>
            </div>
        </>
    );
}