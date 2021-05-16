import React from 'react'
import SkillButton from './SkillButton'
import { useEffect, useState } from 'react'


const Skills = () => {

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 mx-auto">
					<h2 className="text-white mb-4">Skills</h2>
					<SkillButton 
						text="CAD"
						
						/>
				</div>
			</div>
			<img className="img-fluid" src="assets/img/techbg.jpg" alt="..." id="skillBg" />
		</div>
	)
}


export default Skills
