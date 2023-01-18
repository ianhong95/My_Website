import React from 'react'
import Popup from 'reactjs-popup';
import ProjectInfo from "./ProjectInfo.js"

const Project_Item = ({ title, intro, text, skills, display_img, imgs }) => {

    var path = "assets/img/".concat( display_img )

    return (

        <div className="project-card">
            {/* <div className="project-preview-img"> */}
                <Popup
                    modal={true}
                    trigger={<img 
                        className="project-preview-img" 
                        src={ path } 
                        alt="..."></img>}
                    className="project" >

                    <ProjectInfo
                        title={ title }
                        text={ text }
                        imgs={ imgs } />

                </Popup>
            {/* </div> */}
            <div className="project-preview-text">
                <div className="project-preview-text">
                    <h4 className="text-white">{ title }</h4>
                    <p className="mb-0 text-white-50">{ intro }</p>
                    <hr className="project-hr" />
                    <p className="mb-0 text-white-50">{ skills }</p>
                </div>
            </div>
        </div>
    )
}

export default Project_Item
