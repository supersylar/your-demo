import React, { PropTypes as T, Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class LeftNav extends Component {
  render () {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/board">Board</Link></li>
        <li><Link to="/detailList">Detail List</Link></li>
      </ul>
    )
  }
}

export default LeftNav