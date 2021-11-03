import React,{Fragment} from 'react';
import { Container } from 'react-bootstrap';

const TimelinePage = () => {
    return [
        <Fragment>
        <Container>
        <hr/><br/><br/>  
             <div id='timeline'></div>
             
          <h1>Timeline</h1>
        <section>
            <div className="container py-5">
              <div className="main-timeline">
                <div className="timeline left">
                  <div className="card">
                    <div className="card-body p-4">
                      <h3>Software Engineer/Consultant (Part time), 2021</h3>
                      <p className="mb-0">• Provided software development consultancy and project management</p>
                    </div>
                  </div>
                </div>
                <div className="timeline right">
                  <div className="card">
                    <div className="card-body p-4">
                      <h3>Computer Vision Lead, Eyecandylab GmbH, 2018-2019</h3>
                      <p>• Led the computer vision R&D department in regards to computer vision tasks and product development</p>
                    <p className="mb-0">• Successfully developed live video broadcast recognition system using open set recognition algorithm</p>
                    <p className="mb-0">• Successfully delivered commercial real-time live television broadcast recognition system for LG Uplus South Korea</p>
        
                    </div>
                  </div>
                </div>
                <div className="timeline left">
                  <div className="card">
                    <div className="card-body p-4">
                      <h3>Software Developer (Freelance), 2015</h3>
                      <p className="mb-0">• Developed prototype augmented reality applications on Hololens and Epson Moverio BT-100 using Unity game engine</p>
                        <p className="mb-0">• Developed magnetic resonance imaging (MRI) data viewer on Hololens using Unity</p>   
                        <p className="mb-0">• Developed a DIY fog projection display using ultrasonic atomizers, ventilators and screen projector</p>
                     
                    </div>
                  </div>
                </div>
                <div className="timeline right">
                  <div className="card">
                    <div className="card-body p-4">
                      <h3>Interactive Technologist, Ascend Com Pte Ltd, 2014</h3>
                      <p className="mb-0">• Developed and designed public interactive installations </p>
                    </div>
                  </div>
                </div>
    
                <div className="timeline left">
                  <div className="card">
                    <div className="card-body p-4">
                      <h3>Research Associate,  Magic Vision Lab, 2011</h3>
                     <p className="mb-0">• Conducted augmented reality and human computer interaction research</p>
                    <p className="mb-0">• Developed an interactive haptic feedback content development tool for VHAR system with Canon VH-2007 (industrial-grade augmented reality head mounted display) and Phantom Omni haptic robotic pen</p>
                    <p className="mb-0">• Developed an augmented reality training system with Theremin using Microsoft Kinect and Leap Motion. Publicly demonstrated at International Symposium of Mixed and Augmented Reality (ISMAR) conference</p>
                    <p className="mb-0">• Developed a gesture-controlled data visualization for spatial AR in Kitamura Lab’s Media Room, Tohoku University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </Container>
        </Fragment>

    ];
}
       
export default TimelinePage;