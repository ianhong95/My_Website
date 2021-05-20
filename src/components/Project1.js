import React from 'react'
import Popup from 'reactjs-popup';
import ProjectInfo from "./ProjectInfo.js"

const Project1 = ({ title, intro, text, skills, display_img, imgs }) => {

    var path = "assets/img/".concat( display_img )

    return (

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
                <Popup
                    modal={true}
                    trigger={<img 
                        className="project-img mb-3 mb-lg-0" 
                        src={ path } 
                        alt="..."></img>}
                    className="project" >

                    <ProjectInfo
                        title={ title }
                        text={ text }
                        imgs={ imgs } />

                </Popup>
            </div>
            <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                        <div className="project-text w-100 my-auto text-center text-lg-left">
                            <h4 className="text-white">{ title }</h4>
                            <p className="mb-0 text-white-50">{ intro }</p>
                            <hr className="d-none d-lg-block mb-0 ml-0" />
                            <br></br>
                            <p className="mb-0 text-white-50">{ skills }</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project1
