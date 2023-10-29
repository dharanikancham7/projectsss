import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav>
    <div>
      <img
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1>Wave</h1>
    </div>

    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/about"> About </Link>
      </li>
      <li>
        <Link to="/contact"> Contact </Link>
      </li>
      <li><Link to="/destinationsearch">DestinationSearch</Link></li>
      <li><Link to="/appstore">AppStore</Link></li>
    </ul>
  </nav>

    )
  }
}

export default Header