import React from 'react'
import Popup from 'reactjs-popup';
import ProjectInfo from "./ProjectInfo.js"

const Project2 = ({ title, intro, text, skills, display_img, imgs }) => {

    var path = "assets/img/".concat(display_img)

    return (
        <div className="project-card">
            <div className="project-preview-img">
                <Popup
                    modal={true}
                    trigger={<img 
                        className="project-img" 
                        src={path} 
                        alt="..."></img>}
                    className="project" >

                    <ProjectInfo
                        title={ title }
                        text={ text }
                        imgs={ imgs } />

                </Popup>
            </div>
                <div className="project-preview-text">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-right">
                                <h4 className="text-white">{ title }</h4>
                                <p className="mb-0 text-white-50">{ intro }</p>
                                <hr className="d-none d-lg-block mb-0 mr-0" />
                                <br></br>
                                <p className="mb-0 text-white-50">{ skills }</p>
                            </div>
                        </div>
                    </div>
                </div>
            <br></br>
			<br></br>
        </div>
    )
}

export default Project2
