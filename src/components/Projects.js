import React from 'react';
import FeaturedProject from './FeaturedProject.js';
import Project1 from './Project1.js';
import Project2 from './Project2.js';

const Projects = () => {
    return (
        <div className="container">
          	{/* Featured Project Row*/}
          	<FeaturedProject 
            	title="Face-Following Camera"
				text="This was my first endeavor involving machine vision. The Raspberry Pi-controlled robot uses OpenCV to process images and detect faces using a Haar cascade classifier. Servo motors are then triggered through the I2C interface to attempt to align the camera with the face."
				img="cam_front.png"/>
          {/* Project One Row*/}
          <Project1 />
          <br></br>
          <br></br>
          {/* Project Two Row*/}
          <Project2 />
          <br></br>
          <br></br>
        </div>
    )
}

export default Projects
