import { React, PropTypes } from 'react'

const FeaturedProject = ({ title, text, img}) => {

    var path = "assets/img/".concat(img);

    return (
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
                <img className="img-fluid mb-3 mb-lg-0" src={path} alt="..." />
            </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4>{title}</h4>
                        <p className="text-white-50 mb-0">{text}</p>
                    </div>
                </div>
        </div>
    )
};

export default FeaturedProject
