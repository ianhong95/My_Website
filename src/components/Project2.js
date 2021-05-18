import React from 'react'
import Popup from 'reactjs-popup';
import ProjectInfo from "./ProjectInfo.js"

const Project2 = ({title, text, skills, img}) => {

    var path = "assets/img/".concat(img)

    return (
        <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
                <Popup
                    modal={true}
                    trigger={<img 
                        className="project-img mb-3 mb-lg-0" 
                        src={path} 
                        alt="..."></img>}
                    className="project"
                >
                    <ProjectInfo />
                </Popup>
            </div>
                <div className="col-lg-6 order-lg-first">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-right">
                                <h4 className="text-white">{title}</h4>
                                <p className="mb-0 text-white-50">{text}</p>
                                <hr className="d-none d-lg-block mb-0 mr-0" />
                                <br></br>
                                <p className="mb-0 text-white-50">{skills}</p>
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
