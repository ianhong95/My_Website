import React from 'react'
import { useEffect, useState } from 'react'

const SkillButton = ({text}) => {

    const [bg, setBg] = useState("assets/img/techbg.jpg")

    useEffect(() => {
        document.getElementById("test").onload.src(bg)
    });

	const GetState = () => {
		
	}

    return (
        <div>
            {/* <img id="test" src="assets/img/techbg.jpg"></img> */}
            <button
                onMouseEnter={() => setBg("assets/img/dark_tech_bg.png")}>{text}</button>
        </div>
    )
}

export default SkillButton
