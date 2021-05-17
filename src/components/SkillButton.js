import React from 'react'

const SkillButton = ({text, img}) => {

    var skill_img = document.createElement("img")
    skill_img.className = "skill-img"
    skill_img.src = img
    skill_img.id = "skillBg"

    return (
        <div>
            <button
                className="skill-button"
                onMouseEnter={()=>{
                    if (document.getElementById("skillBg") != null)  {
                        document.getElementById("skillBg").remove()
                        document.getElementById("skill-img-container").appendChild(skill_img)
                    }
                }}>{text}</button>
        </div>
    )
}

export default SkillButton
