import { Component } from 'react'
import 'tachyons'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'Home'
    }
  }

  handlePageChange = (page) => {
    this.setState({ page })
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'Home':
        return <Home onPageChange={this.handlePageChange} />
      case 'About':
        return <About />
      case 'Projects':
        return <Projects />
      case 'Skills':
        return <Skills />
      case 'Contact':
        return <Contact />
      default:
        return <Home onPageChange={this.handlePageChange} />
    }
  }

  render() {
    return (
      <div className="min-vh-100 bg-near-white">
        <Navbar 
          currentPage={this.state.page} 
          onPageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    )
  }
}

export default App
