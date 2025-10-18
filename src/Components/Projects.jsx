import { Component } from 'react'

class Projects extends Component {
  render() {
    const projects = [
      { 
        name: 'Personal Porfolio', 
        tech: 'React', 
        desc: 'The portfolio you are currently viewing is my first released project.',
        year: '2025',
        link: '#'
      },
    ]

    return (
      <div className="min-vh-100 bg-near-white" style={{paddingTop: '80px'}}>
        <div className="center mw7 ph4 pv5">
          <div className="mb5">
            <p className="f6 fw6 ttu tracked mid-gray mb2" style={{letterSpacing: '2px'}}>Portfolio</p>
            <h2 className="f2 f1-ns fw6 dark-gray lh-title mt0">
              Selected Projects
            </h2>
          </div>

          <div>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="mb5 pb4 bb b--light-gray"
              >
                <div className="flex justify-between items-baseline mb3">
                  <h3 className="f3 fw6 dark-gray ma0">{project.name}</h3>
                  <span className="f6 mid-gray">{project.year}</span>
                </div>
                <p className="f6 fw5 mid-gray ttu tracked mb3" style={{letterSpacing: '1px'}}>
                  {project.tech}
                </p>
                <p className="f5 mid-gray lh-copy measure-wide">
                  {project.desc}
                </p>
                <button onClick={() => window.open(project.link, '_blank')} 
                  className="f6 fw6 dark-gray bn bg-transparent pointer dim pa0 mt3">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
