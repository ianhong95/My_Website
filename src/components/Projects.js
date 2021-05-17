import React from 'react';
import FeaturedProject from './FeaturedProject.js';
import Project1 from './Project1.js';
import Project2 from './Project2.js';

const Projects = () => {
    return (
		<div className="container">
			<div className="col-lg-2 mx-auto">
				<h2 className="text-white mb-4">Projects</h2>
				<br></br>
			</div>
			
			{/* Featured Project Row*/}
			<FeaturedProject 
				title="Face-Following Camera"
				text="This was my first endeavor involving machine vision. The Raspberry Pi-controlled robot uses OpenCV to process images and detect faces using a Haar cascade classifier. Servo motors are then triggered through the I2C interface to attempt to align the camera with the face."
				skills="Python, computer vision, SolidWorks, 3D printing"
				img="techbg.jpg"
			/>
			{/* Project One Row*/}
			<Project1 
				title="3D Printer Enclosure"
				text="Using the popular IKEA LACK table enclosure as inspiration, I built my own rendition using fully custom parts."
				skills="SolidWorks, 3D printing"
				img="techbg.jpg"
			/>
			{/* Project Two Row*/}
			<Project2
				title="Bluetooth-Controlled Arduino Car"
				text="A fully 3D-printed car running on an Arduino Nano with a bluetooth module for remote control."
				skills="SolidWorks, 3D printing, C++"
				img="techbg.jpg"
			/>
		</div>
    )
}

export default Projects
