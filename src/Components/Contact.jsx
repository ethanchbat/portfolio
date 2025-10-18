import { Component } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit = () => {
    alert('Thank you for your message! I will get back to you soon.')
    this.setState({ name: '', email: '', message: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="min-vh-100 bg-near-white" style={{paddingTop: '80px'}}>
        <div className="center mw6 ph4 pv5">
          <div className="mb5">
            <p className="f6 fw6 ttu tracked mid-gray mb2" style={{letterSpacing: '2px'}}>Get in Touch</p>
            <h2 className="f2 f1-ns fw6 dark-gray lh-title mt0">
              Let's work together
            </h2>
            <p className="f5 mid-gray lh-copy measure">
              Have a project in mind? I'm always open to discussing new opportunities and interesting problems to solve.
            </p>
          </div>

          <div>
            <div className="mb4">
              <label className="db f6 fw6 dark-gray mb2">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="w-100 pa3 f5 ba b--light-gray br2 input-reset"
                placeholder="Your name"
              />
            </div>
            <div className="mb4">
              <label className="db f6 fw6 dark-gray mb2">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="w-100 pa3 f5 ba b--light-gray br2 input-reset"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb4">
              <label className="db f6 fw6 dark-gray mb2">Message</label>
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                rows={6}
                className="w-100 pa3 f5 ba b--light-gray br2 input-reset"
                placeholder="Tell me about your project..."
                style={{resize: 'vertical'}}
              />
            </div>
            <button
              onClick={this.handleSubmit}
              className="w-100 pv3 f5 fw6 white bg-dark-gray ba b--dark-gray br2 pointer dim"
            >
              Send Message
            </button>
          </div>

          <div className="pt3 bt b--light-gray tc">
            <p className="f6 mid-gray mb3">Or reach out directly</p>
            <div className="flex flex-column">
              <p className="f5 mid-gray lh-copy measure ma0">info@ethanchbat.com</p>
              <p className="f5 mid-gray lh-copy measure ma0 mb4">+961 81-338-166</p>
            </div>
            <div className="flex justify-center">
              <a href="mailto:info@ethanchbat.com" className="f5 dark-gray link dim mh3"><FaEnvelope /></a>
              <a href="https://linkedin.com/in/ethan-chbat-42052434b" className="f5 dark-gray link dim mh3"><FaLinkedin /></a>
              <a href="https://github.com/ethanchbat" className="f5 dark-gray link dim mh3"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact