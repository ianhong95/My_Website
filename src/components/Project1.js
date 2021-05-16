import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom"
  import ProjectInfo from "./ProjectInfo.js"

const Project1 = ({title, text, skills, img, linkTo}) => {

    var path = "assets/img/".concat(img)

    return (
        <Router>
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div className="col-lg-6"><img className="img-fluid" src={path} alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <Link to={linkTo}><h4 className="text-white">{title}</h4></Link>
                                    <p className="mb-0 text-white-50">{text}</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                    <br></br>
                                    <p className="mb-0 text-white-50">{skills}</p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            
            <Route path={linkTo}>
                <ProjectInfo />
            </Route>
        </Router>
    )
}

export default Project1
