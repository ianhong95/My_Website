import React from 'react';
import Project_Item from './Project_Item.js';

const Projects = () => {

    return (
		<div className="projects-section">
			<div className="col-lg-2 mx-auto">
				<h2 className="text-white mb-4">Projects</h2>
				<br></br>
			</div>
			
			<div className="projects-container">
				<Project_Item
					title="Smart Home Control Panel [2022]"
					intro="Browser-based interface for controlling the smart devices around the house."
					text="Inspired by Google Home, I designed and built a web UI for controlling smart devices such as lights and plugs. The application consists of one Docker container for the React JS frontend, and another container for the Python API to facilitate the communication between user input, the database, and the devices. This application is hosted locally on a Raspberry Pi 4B."
					skills="HTML/CSS, React JS, Python, SQL, Linux, Docker"
					display_img="control_panel_2.PNG"
					imgs="/assets/img/control_panel.PNG"
				/>

				<Project_Item 
					title="Vacuum Gripper [2022]"
					intro="A simple yet powerful suction gripper that can be used for a wide range of applications!"
					text="This suction gripper consists of a special silicone suction cup in a 3D-printed housing, and runs off a 12V DC vacuum pump. The suction is controlled using a 2-way 3-port solenoid valve, which in turn is controlled using a NodeMCU microcontroller. A function was written in Python to send GET requests to the NodeMCU's web server to activate/deactivate the vacuum pump and open/close the solenoid's exhaust port. TLDR; it sucks."
					skills="CAD (OnShape), 3D printing, pneumatics, circuits"
					display_img="vacuum_gripper_01.jpg"
					imgs="/assets/img/vacuum_gripper_01.jpg"
				/>

				<Project_Item
					title="Parallel Gripper [2022]"
					intro="A 3D-printed parallel gripper designed for industrial robotic arms with a standard mounting hole pattern."
					text="This parallel gripper was modeled after OnRobot's 2FG7 gripper. It was used for prototyping robotic applications involving a 6-axis arm for a low-budget project. It uses a rack-and-pinion mechanism driven by an MG996R servo motor, and is controlled via Wi-Fi by sending GET requests to a NodeMCU web server."
					skills="CAD (OnShape), 3D printing, C++, Python"
					display_img="parallel_gripper_01.jpg"
					imgs="/assets/img/parallel_gripper_01.jpg"
				/>

				<Project_Item
					title="3D Printer Upgrades [Ongoing]"
					intro="At what point does it stop being an Ender 3 Pro?"
					text="Creality's Ender 3 series is the most popular 3D printer due to its low entry cost to the hobby. However, you do get what you pay for."
					display_img="3D_Printer_Upgraded.jpg"
					imgs="/assets/img/ender_3_pro_upgrade_list.png"
				/>

				<Project_Item
					title="Raspberry Pi Cases [2022]"
					intro="Various Raspberry Pi 4B enclosures to accommodate external hardware such as hard drives."
					text="My collection of Raspberry Pis has grown, and it didn't feel right to have bare boards lying around. I designed custom cases for each application depending on what accessories or features are required for the Pi, such as HDD/SSD interfacing boards, mounting holes, or just cool PC-looking cases."
					skills="CAD (OnShape), 3D printing"
					display_img="rpi_case.PNG"
					imgs="/assets/img/Rpi_Cases.png"
				/>

				<Project_Item
					title="Face-Following Camera [2021]"
					intro="A Raspberry Pi camera module encased in a 3D printed chassis and driven by servo motors."
					text="This was my first endeavor involving machine vision. The Raspberry Pi-controlled robot uses OpenCV to process images and detect faces using a Haar cascade classifier. Servo motors are then triggered through the I2C interface to attempt to align the camera with the face. Now I can be certain that I am always being spied on."
					skills="Python, computer vision, CAD (SolidWorks), 3D printing"
					display_img="cam_front.png"
					imgs="/assets/img/PiCam1.png"
				/>

				<Project_Item
					title="3D Printer Enclosure [2020]"
					intro="Using the popular IKEA LACK table enclosure as inspiration, I built my own rendition using fully custom parts."
					text="This enclosure isn't all just bright lights and pretty windows. It blocks out drafts and helps maintain a fairly constant temperature around the print, which is ideal for printing in materials such as PETG that require more heat than the traditional PLA. This also ensures that the infamous Canadian winters don't result in undesirable part cooling."
					skills="CAD (SolidWorks), 3D printing"
					display_img="3DPrinter1.jpg"
					imgs="/assets/img/3DPrinter1.jpg"
				/>

				<Project_Item
					title="Bluetooth Arduino Car [2020]"
					intro="A fully 3D-printed car running on an Arduino Nano with a bluetooth module for remote control."
					text="I had servo motors lying around from my university Sumobot competition project and decided to put them to use. I designed a chassis that fits all the components (Arduino, servos, bluetooth module, battery) perfectly in one neat package and drove it around the house. I received great feedback from members of my household such as 'please stop that obnoxious noise'."
					skills="CAD (SolidWorks), 3D printing, Arduino"
					display_img="car.jpg"
					imgs="/assets/img/car.jpg"
				/>

			</div>
		</div>
    )
}

export default Projects
