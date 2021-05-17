import { React } from 'react'
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import ProjectInfo from './ProjectInfo'

const FeaturedProject = ({ title, text, skills, img }) => {

    var path = "assets/img/".concat(img);

    return (
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
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
                {/* <input className="img-fluid mb-3 mb-lg-0" type="image" src={path}></input> */}
            </div>
            <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                    <h4>{title}</h4>
                    <p className="text-white-50 mb-0">{text}</p>
                    <br></br>
                    <br></br>
                    <p className="text-white-50 mb-0">{skills}</p>
                </div>
            </div>
        </div>
    )
};

export default FeaturedProject
