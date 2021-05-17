import React from 'react'
import SkillButton from './SkillButton'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSpring, Spring, animated } from 'react-spring'
import { useState } from 'react'

const Skills = () => {

	const defaultImg = "assets/img/techbg.jpg"

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 mx-auto">
					<h2 className="text-white mb-4">Skills</h2>
					</div>
					<div className="skills-container">
						<SkillButton 
							text="CAD"
							img="assets/img/rendered_grippers.png"
							details="3D modelling, assemblies, drawings"
						/>
						<SkillButton 
							text="CAE"
							img="assets/img/cam_front.png"
						/>
						<SkillButton
							text="Mechanical Design"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="Manufacturing"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="GD&amp;T"
							img="assets/img/dark_tech_bg.png"
						/>	
						<SkillButton
							text="3D Printing"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="Manufacturing"
							img="assets/img/dark_tech_bg.png"
						/>																																								
					</div>
					<div className="skills-container">
						<SkillButton
							text="Matlab"
							img="assets/img/dark_tech_bg.png"
						/>						
						<SkillButton
							text="Python"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="Excel VBA"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="React.js"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="JavaScript"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="Computer Vision"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="Git"
							img="assets/img/dark_tech_bg.png"
						/>
						<SkillButton
							text="HTML/CSS"
							img="assets/img/dark_tech_bg.png"
						/>		
					</div>
			</div>
			
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
