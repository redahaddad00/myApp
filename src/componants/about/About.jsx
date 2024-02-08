import React, { Component } from 'react'
import style from '../about/About.module.css'
export default class About extends Component {
  render() {
    return (
      <header className={style.header}>
        
      <div className="about-main text-center text-white">
        <h2 className={`fw-bold ${style.h2}`}>ABOUT COMPONENT</h2>
        <i className={`fa-solid fa-star text-white ${style.i}`}></i>
        <div className="paragraph d-flex gap-5 ">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>

      </header>
    )
  }
}
