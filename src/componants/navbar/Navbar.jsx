import React, { Component } from 'react'
import '../navbar/Navbar.module.css'
import { Link } from 'react-router-dom'


export default class


extends Component {
  render() {
    return (

<nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <Link className="navbar-brand text-white fw-bolder fs-3" to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  text-white fw-bolder"  aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bolder"  to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold"  to="contact">CONTACT</Link>
        </li>
        
        
      </ul>
    
    </div>
  </div>
</nav>

    )
  }
}
