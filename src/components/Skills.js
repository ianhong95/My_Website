import React from 'react'
import SkillButton from './SkillButton'
import 'reactjs-popup/dist/index.css';

const Skills = () => {

	const defaultImg = "assets/img/printed_piano.jpg"

	return (
		<div className="skills-section">
			<h2 className="text-white mb-4">Skills</h2>
			{/* </div> */}
			<div className="skills-container">
				<SkillButton 
					text="CAD"
					img="assets/img/CAD.png"
					details="3D modelling, assemblies, drawings"
				/>
				<SkillButton 
					text="CAE"
					img="assets/img/CAE.png"
				/>
				<SkillButton
					text="Mechanical Design"
					img="assets/img/HDD_Clock.jpg"
				/>
				<SkillButton
					text="Manufacturing"
					img="assets/img/manufacturing.jpg"
				/>
				<SkillButton
					text="GD&amp;T"
					img="assets/img/GDT.png"
				/>	
				<SkillButton
					text="3D Printing"
					img="assets/img/3DPrinting2.jpg"
				/>
				<SkillButton
					text="Prototyping"
					img="assets/img/robot_picking.PNG"
				/>
				<SkillButton
					text="Matlab"
					img="assets/img/matlab.png"
				/>						
				<SkillButton
					text="Python"
					img="assets/img/PiCam1.png"
				/>
				<SkillButton
					text="Excel VBA"
					img="assets/img/vba.png"
				/>
				<SkillButton
					text="React.js"
					img="assets/img/website.png"
				/>
				<SkillButton
					text="JavaScript"
					img="assets/img/javascript.png"
				/>
				<SkillButton
					text="Git"
					img="assets/img/git_logo.png"
				/>
				<SkillButton
					text="HTML/CSS"
					img="assets/img/html-css.png"
				/>																																										
			</div>
					{/* <div className="skills-container"> */}
						
					{/* </div> */}
		{/* </div> */}
			
			<hr className="skill-hr"></hr>
			<div className="skill-img-container" id="skill-img-container">

				<img
					className="skill-img" 
					src={defaultImg} 
					alt="..." 
					id="skillBg"/>

			</div>
			<div className="vertical-spacer"></div>
		</div>
	)
}


export default Skills
