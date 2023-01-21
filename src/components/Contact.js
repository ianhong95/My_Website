import React from 'react'

const Contact = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fas fa-map-marked-alt fa-3x text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">Location</h4>
                        <hr className="my-4" />
                        <div className="small text-black-50">Markham, ON</div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fas fa-envelope fa-3x text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">Email</h4>
                        <hr className="my-4" />
                        <div className="small text-black-50"><a href="mailto:ianqyhong@gmail.com">ianqyhong@gmail.com</a></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fas fa-mobile-alt fa-3x text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">Phone</h4>
                        <hr className="my-4" />
                        <div className="small text-black-50">+1 (647) 868-6231</div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="social d-flex justify-content-center">
            <a className="mx-2" href="https://linkedin.com/in/ianhong95" target="_blank"><i className="fab fa-linkedin fa-5x"></i></a>
            <a className="mx-2" href="https://github.com/ianhong95" target="_blank"><i className="fab fa-github fa-5x"></i></a>
        </div>
    </div>
    )
}

export default Contact
