import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.ZzdP9AdvlCYog+Quq6R6b0gN4FcLgRULcMU+jDIqD99LxUc6unyAOA=='

const Navbar =() => {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <Link className="brand-logo left" to="/home">
           <img src={logo} alt='logo' height="70"/>
        </Link>
        <ul className="right">
          <li>
            <Link className="nav-link" to="/home">
              <i className="material-icons hide-on-large-only">home</i>
              <p className="hide-on-med-and-down">Home</p>
            </Link></li>
          <li>
            <Link className="nav-link" to="/favorites">
              <i className="material-icons hide-on-large-only">favorite</i>
              <p className="hide-on-med-and-down">Favorites</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar