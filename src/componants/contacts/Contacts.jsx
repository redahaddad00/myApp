import React, { Component } from 'react'
import style from './Contacts.module.css'
export default class 




extends Component {
  render() {
    return (
      <div>

        <div className={` ${style.parent}`}>
          <h2 className={`${style.h2} fw-bold`}>CONATCT SECTION</h2>
          
<input type="text" placeholder='userName' className={` ${style.input}`}  />
<input type="text" placeholder='userAga' className={` ${style.input}`}  />
<input type="email" placeholder='userEmail' className={`${style.input}`}  />
<input type="password" placeholder='password' className={` ${style.input}`}  />

<button className={`btn ${style.button}`}>Send Message</button>
</div>

      </div>
    )
  }
}
