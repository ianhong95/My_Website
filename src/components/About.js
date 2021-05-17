import React from 'react'

const About = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About Me</h2>
              <p className="text-white-50-left">
                Hi, I'm Ian. I studied Mechanical Engineering at McMaster University, and have always had a strong interest in automation.
                I've recently discovered my love for coding through experimental projects in my free time. I find joy in building things, whether it be silly robots or scripts/programs for automation.
              </p>
            </div>
          </div>
          <img className="about-img" src="assets/img/techbg.jpg" alt="..." id="test"/>
        </div>
        
    )
}

export default About
