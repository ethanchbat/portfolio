import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '6rem 1.5rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
          {String(this.state.error?.stack || this.state.error)}
        </div>
      )
    }
    return this.props.children
  }
}
