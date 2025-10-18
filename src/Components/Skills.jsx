import { Component } from 'react'

class Skills extends Component {
  render() {
    const skills = {
      'Frontend Development': ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Next.js'],
      'Backend Development': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      'Tools & Methods': ['Git/Github', 'Tailwind CSS', 'Vite', 'Vercel', 'AWS']
    }

    return (
      <div className="min-vh-100 bg-near-white" style={{paddingTop: '80px'}}>
        <div className="center mw7 ph4 pv5">
          <div className="mb5">
            <p className="f6 fw6 ttu tracked mid-gray mb2" style={{letterSpacing: '2px'}}>Expertise</p>
            <h2 className="f2 f1-ns fw6 dark-gray lh-title mt0">
              Skills & Technologies
            </h2>
          </div>

          <div>
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className={`mb5 ${idx !== Object.keys(skills).length - 1 ? 'pb4 bb b--light-gray' : ''}`}>
                <h3 className="f4 fw6 dark-gray mb3">{category}</h3>
                <div className="flex flex-wrap">
                  {items.map((skill, index) => (
                    <span 
                      key={index} 
                      className="f6 fw5 mid-gray ba b--light-gray br2 ph3 pv2 mr2 mb2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt5 pt4 bt b--light-gray">
            <h3 className="f4 fw6 dark-gray mb4">Certifications & Education</h3>
            <div className="mb3">
              <h4 className="f5 fw6 dark-gray mb2">Complete Web Development Course</h4>
              <p className="f6 mid-gray ma0">Zero to Mastery</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills