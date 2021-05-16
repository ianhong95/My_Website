import React from 'react'

const Project2 = ({title, text, skills, img}) => {

    var path = "assets/img/".concat(img)

    return (
        <div class="row justify-content-center no-gutters">
            <div class="col-lg-6"><img class="img-fluid" src={path} alt="..." /></div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="text-white">{title}</h4>
                                <p class="mb-0 text-white-50">{text}</p>
                                <hr class="d-none d-lg-block mb-0 mr-0" />
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
