import React, { Component } from 'react'
import img1 from '../../assets/img/de1.png'
import img2 from '../../assets/img/de2.png'
import img3 from '../../assets/img/de3.png'
import style from '../portfolio/Portfolio.module.css'
export default class Portfolio extends Component {
  render() {
    return (
      <div className={style.Portfolio}>

        <div className={`${style.title}`} >
          <h2 className={`fw-bold ${style.h2}`}>PORTFOLIO COMPONENT</h2>
        </div>
        <div className={`${style.star} text-center`}>
        <i className={`fa-solid fa-star `}></i>
        </div>

<div className={`container`} >
  <div className="row">
    
    <div className="col-4">
      <img src={img1} alt=""className={`img ${style.img}`} />
      


    </div>
    <div className="col-4">
    <img src={img2} alt="" className={`img ${style.img}`}/>

    
    </div>


    <div className="col-4">
    <img src={img3} alt="" className={`img ${style.img}`} />
  
    </div>



    <div className="col-4">
      <img src={img1} alt="" className={`img ${style.img}`} />
 
    </div>
    <div className="col-4">
      <img src={img2} alt="" className={`img ${style.img}`} />
  
    </div>


    <div className="col-4">
      <img src={img3} alt="" className={`img ${style.img}`} />
    
    </div>
  </div>
</div>

      </div>
    )
  }
}
