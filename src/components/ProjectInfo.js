import React from 'react'
import 'reactjs-popup/dist/index.css';

const ProjectInfo = ({ title, text, imgs }) => {
    return (
        <div className="project-detail-main-container">
            <h4 className="project-detail-title">{ title }</h4>
            <hr></hr>
        
        <div className="project-detail-container">
            <div className="project-detail-col-1">
                <img className="project-detail-img" src={ imgs }></img>
            </div>
            <div className="project-detail-col-2">
                <p className="project-detail-text text-white-50 mb-0">{text}</p>
                <hr className="d-none d-lg-block mb-0 mr-0"/>
            </div>
            
        </div>
        </div>
    )
}

export default ProjectInfo
