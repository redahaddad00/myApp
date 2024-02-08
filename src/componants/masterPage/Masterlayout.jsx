import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
export default class Masterlayout extends Component {
  render() {
    return (
      <div>

<Navbar/>
<Outlet/>
<Footer/>
      </div>
    )
  }
}
