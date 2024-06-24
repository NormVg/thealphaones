import React from 'react'

import BtUp from "../assets/bt-box-up.png"
import BtDowm from "../assets/bt-box-down.png"

import "../css/BtBoxStyle.css"

function BtBox() {
  return (
    <div id='bt-box'>
        <div id='bt-box-up'><img src={BtUp} alt="bt-up" /></div>
        <div id='bt-box-con'>
            <div id='bt-box-con-head'>Title</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Incidunt, est debitis fugiat officia assumenda nostrum voluptatem autem libero?</div>
        <div id='bt-box-down'><img src={BtDowm} alt="bt-down" /></div>
    </div>
  )
}

export default BtBox