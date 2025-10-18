import { Component } from 'react'
import '../Navbar.css'

class Navbar extends Component {
  render() {
    const { currentPage, onPageChange } = this.props
    const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']
    
    return (
      <nav className="bg-white bb b--light-gray fixed top-0 w-100 z-999" style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
        <div className="center mw8 ph4 pv3 flex justify-between items-center">
          <div className="f3 fw6 dark-gray">
            Ethan Chbat
          </div>
          <div className="flex items-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onPageChange(item)}
                className={`mh3 ph3 pv2 fw5 f6 bn bg-transparent pointer ${
                  currentPage === item
                    ? 'dark-gray bb bw2 b--dark-gray'
                    : 'mid-gray hover-dark-gray'
                }`}
                style={{transition: 'all 0.3s ease', letterSpacing: '0.5px'}}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
