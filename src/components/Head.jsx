import React from 'react'

import logo from "../assets/logo.png"
import navflow from "../assets/nav-flow.png"

import "../css/HeadStyle.css"

function Head() {

    function toggleNavBar(){
        console.log("hehe nav bar clicked")
    }

  return (
    <div id='header'>
        <img id='tao-logo' src={logo} alt="" />
        <div id='nav-flow' onClick={toggleNavBar}><img id='nav-flow' src={navflow} alt="" /></div>
        
    </div>
  )
}

export default Head