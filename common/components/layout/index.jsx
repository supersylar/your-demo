import React, { PropTypes as T, Component } from 'react'
import Left from '../leftNav/index.jsx'
import './style.scss'

class Layout extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="header">header</div>
        <div className="main">
          <div className="nav"><Left/></div>
          <div className="content">{this.props.children}</div>
        </div>
        <div className="footer">footer</div>
      </div>
    )
  }
}

export default Layout