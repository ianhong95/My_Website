import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const MenuBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">Ian Hong
                <div className="container">
                <a onClick={() => {scroll.scrollToTop()}} className="navbar-brand js-scroll-trigger" href="#page-top">Home</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <Link
                        activeClass="active" 
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    </Link>
                    <Link
                        activeClass="active" 
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    </Link>
                    <Link
                        activeClass="active" 
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    </Link>                    
                    <Link
                        activeClass="active" 
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </Link>                    
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default MenuBar
