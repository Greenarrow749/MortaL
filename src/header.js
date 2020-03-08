import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class header extends Component {
    render() {
        return (
            <div className="main">
                <div id="header" class="box">
    <h1 id="logo">News<span>24</span>x7</h1>
    <ul id="nav">
      <li class="current"><Link to="/">Homepage</Link></li>
      <li><Link to="./Categories">Categories</Link></li>
      <li><Link to="./Discussion">Discussion</Link></li>
      <li><Link to="#">Authors</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </div>
            </div>
        )
    }
}

export default header
