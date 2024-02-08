import React, { Component } from 'react'
import img from '../../assets/img/img.png'
import style from '../home/Home.module.css'
export default class 

extends Component {
  render() {
    return (
      
<header className={style.home}>
<img className='w-25' src={img}/>
<h2 className={`text-white fw-bolder ${style.h2}`}>START FRAMEWORK</h2>
<i className={`fa-solid fa-star text-white ${style.i}`} ></i>
<p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
</header>




   
    )
  }
}
