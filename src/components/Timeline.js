import React from "react";

function Timeline() {

    return (
        <>
            <div className="container py-5">
            <hr/><br/><br/>  
             <div id='timeline'></div>
          <h1>Timeline</h1>

                <div className="row">
                    <div className="col-lg-7 mx-auto">

                        
                        <ul className="timeline">
                        <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Senior Software Engineer, X-FAB Sarawak Sdn Bhd</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>May 2022-present</span>
                             
                            </li>
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Software Engineer/Consultant (Part time)</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>Jan 2021-April 2022</span>
                                <p className="text-small mt-2 font-weight-light">• Provided software development consultancy and project management</p>
                            </li>
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Computer Vision Lead, Eyecandylab GmbH</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>Feb 2018 – Dec 2019</span>
                                <p className="text-small mt-2 font-weight-light">• Led the computer vision R&D department in regards to computer vision tasks and product development</p>
                                <p className="text-small mt-2 font-weight-light">• Successfully developed live video broadcast recognition system using open set recognition algorithm</p>
                                <p className="text-small mt-2 font-weight-light">• Successfully delivered commercial real-time live television broadcast recognition system for LG Uplus South Korea</p>
                            </li>
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Software Developer (Freelance)</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>Jan 2015 – June 2017</span>
                                <p className="text-small mt-2 font-weight-light">• Developed prototype augmented reality applications on Hololens and Epson Moverio BT-100 using Unity game engine</p>
                                <p className="text-small mt-2 font-weight-light">• Developed magnetic resonance imaging (MRI) data viewer on Hololens using Unity</p>
                                <p className="text-small mt-2 font-weight-light">• Developed a DIY fog projection display using ultrasonic atomizers, ventilators and screen projector</p>
                            </li>
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Interactive Technologist, Ascend Com Pte Ltd</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>Oct 2014 - Dec 2014</span>
                                <p className="text-small mt-2 font-weight-light">• Developed and designed public interactive installations</p>
                            </li>
                            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Research Associate,  Magic Vision Lab</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>Sept 2011 – Dec 2013</span>
                                <p className="text-small mt-2 font-weight-light">• Conducted augmented reality and human computer interaction research</p>
                                <p className="text-small mt-2 font-weight-light">• Developed an interactive haptic feedback content development tool for VHAR system with Canon VH-2007 (industrial-grade augmented reality head mounted display) and Phantom Omni haptic robotic pen</p>
                                <p className="text-small mt-2 font-weight-light">• Developed an augmented reality training system with Theremin using Microsoft Kinect and Leap Motion. Publicly demonstrated at International Symposium of Mixed and Augmented Reality (ISMAR) conference</p>
                                <p className="text-small mt-2 font-weight-light">• Developed a gesture-controlled data visualization for spatial AR in Kitamura Lab’s Media Room, Tohoku University</p>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Timeline;