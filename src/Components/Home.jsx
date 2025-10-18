import { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="min-vh-100 bg-near-white" style={{paddingTop: '80px'}}>
        <div className="center mw7 ph4 pv6">
          <div className="mb5">
            <p className="f6 fw6 ttu tracked mid-gray mb3" style={{letterSpacing: '2px'}}>
              Full Stack Developer | Musician
            </p>
            <h1 className="f-headline-l f1-m f2 fw6 dark-gray lh-solid mb4 mt0">
              Crafting digital experiences by day, creating music by night.
            </h1>
            <p className="f4 f3-ns mid-gray lh-copy measure mb4">
              I'm a full-stack web developer building accessible, human-centered digital experiences.
               Outside of code, I’m a guitarist and pianist, 
               exploring music production and aiming to turn my passion into a profession.
            </p>
            <div className="flex items-center mt4">
              <button 
                onClick={() => this.props.onPageChange('Projects')}
                className="ph4 pv3 f5 fw6 white bg-dark-gray ba b--dark-gray br2 pointer dim mr3"
              >
                View Projects
              </button>
              <button 
                onClick={() => this.props.onPageChange('Contact')}
                className="ph4 pv3 f5 fw6 dark-gray bg-white ba b--dark-gray br2 pointer dim"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home