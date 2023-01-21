import React from 'react'
import 'reactjs-popup/dist/index.css';

const ProjectInfo = ({ title, text, imgs }) => {
    return (
        <div className="project-detail-main-container">
            <h4 className="project-detail-title">{ title }</h4>
        
        <div className="project-detail-container">

            <div className="project-detail-col-1">
                <a href={ imgs } target="_blank" className="project-img-anchor">
                    <img className="project-detail-img" src={ imgs }></img>
                </a>
            </div>

            <div className="project-detail-col-2">
                <p className="project-detail-text text-white-50">{text}</p>
            </div>    
        </div>
        </div>
    )
}

export default ProjectInfo
