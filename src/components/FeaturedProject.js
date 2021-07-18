import { React, useState } from 'react'
import Popup from 'reactjs-popup';
import ProjectInfo from './ProjectInfo'

const FeaturedProject = ({ title, intro, text, skills, display_img, imgs }) => {

    var path = "assets/img/".concat(display_img);

    const [fadeClass, setFadeClass] = useState("project")

    const [active, setActive] = useState(true)

    const onClose = () => {
        if (active === false) {
            setFadeClass("project-exit")
        } else {
            setFadeClass("project")
        }
    }

    return (
        <div className="project-card">
            <div>
                <Popup
                    modal={true}
                    trigger={<img 
                        className="project-preview-img" 
                        src={path} 
                        alt="..."></img>}
                    className={fadeClass}
                    onClose={onClose} >

                    <ProjectInfo
                        title="Face-Following Camera"
                        text={ text }
                        imgs={ imgs } />
                        
                </Popup>
            </div>
            <div>
                <div className="project-preview-text">
                    <h4>{ title }</h4>
                    <p className="text-white-50 mb-0">{ intro }</p>
                    <br></br>
                    <br></br>
                    <p className="text-white-50 mb-0">{ skills }</p>
                </div>
            </div>
        </div>
    )
};

export default FeaturedProject
