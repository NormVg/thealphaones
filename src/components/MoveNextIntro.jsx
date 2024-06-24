import React from 'react'

import flowintro from "../assets/flow-intro.png"
import "../css/MoveNextHomeStyle.css"

function MoveNextIntro() {
  return (
    <div  id="movenext" >
      <a href="#intro-box">
        <img src={flowintro} alt="" />
      </a>
    </div>
  )
}

export default MoveNextIntro