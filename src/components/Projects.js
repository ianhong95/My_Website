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
				intro="A Raspberry Pi camera module encased in a 3D printed chassis and driven by servo motors."
				text="This was my first endeavor involving machine vision. The Raspberry Pi-controlled robot uses OpenCV to process images and detect faces using a Haar cascade classifier. Servo motors are then triggered through the I2C interface to attempt to align the camera with the face. Now I can be certain that I am always being spied on."
				skills="Python, computer vision, SolidWorks, 3D printing"
				display_img="cam_front.png"
				imgs="assets/img/PiCam1.png"
			/>
			{/* Project One Row*/}
			<Project1 
				title="3D Printer Enclosure"
				intro="Using the popular IKEA LACK table enclosure as inspiration, I built my own rendition using fully custom parts."
				text="This enclosure isn't all just bright lights and pretty windows. It blocks out drafts and helps maintain a fairly constant temperature around the print, which is ideal for printing in materials such as PETG that require more heat than the traditional PLA. This also ensures that the infamous Canadian winters don't result in undesirable part cooling."
				skills="SolidWorks, 3D printing"
				display_img="3DPrinter1.jpg"
				imgs="/assets/img/3DPrinter1.png"
			/>
			{/* Project Two Row*/}
			<Project2
				title="Bluetooth-Controlled Arduino Car"
				intro="A fully 3D-printed car running on an Arduino Nano with a bluetooth module for remote control."
				text="I had servo motors lying around from my university Sumobot competition project and decided to put them to use. I designed a chassis that fits all the components (Arduino, servos, bluetooth module, battery) perfectly in one neat package and drove it around the house. I received great feedback from members of my household such as 'please stop that obnoxious noise'."
				skills="SolidWorks, 3D printing, C++"
				display_img="car.jpg"
				imgs="/assets/img/car.jpg"
			/>
		</div>
    )
}

export default Projects
