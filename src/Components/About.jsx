import { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="min-vh-100 bg-near-white" style={{paddingTop: '80px'}}>
        <div className="center mw7 ph4 pv5">
          <div className="mb4">
            <p className="f6 fw6 ttu tracked mid-gray mb2" style={{letterSpacing: '2px'}}>About</p>
            <h2 className="f2 f1-ns fw6 dark-gray lh-title mt0">
              Nice to meet you
            </h2>
          </div>
          
          <div className="measure-wide">
            <p className="f4 mid-gray lh-copy mb4">
              I’m a full-stack web developer passionate about creating digital experiences that are both functional and engaging. 
              I started coding at 11 and, 
              after some early experimentation, 
              returned to web development at 16 with professional training and a drive to build personal projects from scratch. 
              I’m most efficient on the front end but comfortable handling back-end and database work as well. 
              What excites me most is solving complex problems and watching an idea come to life on the screen. 
              I’m also eager to expand my expertise into cybersecurity and, eventually, AI/ML, 
              continuously exploring new technologies and challenges.
            </p>
            <p className="f4 mid-gray lh-copy mb4">
              Outside of development, 
              I’m a guitarist and pianist exploring music production and composition. 
              I’m focused on improving my skills and pursuing music professionally, 
              blending creativity with technical precision. 
              My work in coding and music reflects a curious, 
              detail-oriented, and ambitious mindset—I’m obsessed with learning, 
              experimenting, and creating in everything I do.
            </p>
          </div>

          <div className="mt5 pt4 bt b--light-gray">
            <h3 className="f4 fw6 dark-gray mb3">Experience</h3>
            <div className="mb4">
              <div className="flex justify-between items-baseline mb2">
                <h4 className="f5 fw6 dark-gray ma0">Intern</h4>
                <span className="f6 mid-gray">2024</span>
              </div>
              <p className="f6 mid-gray lh-copy ma0">End space MENA</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About