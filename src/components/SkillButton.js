import React from 'react'

const SkillButton = ({text, img}) => {

    return (
        <div>
            <button
                className="skill-button"
                onMouseEnter={()=>{
                    if (document.getElementById("skillBg") != null)  {
                        document.getElementById("skillBg").src = img
                    }
                }}>{text}</button>
        </div>
    )
}

export default SkillButton
