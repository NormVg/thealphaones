import React from 'react'
import flowHome from "../assets/flow-home.png"

import "../css/MoveNextHomeStyle.css"

function MoveNextHome() {
  console.log("bhai MoveNextHome")
  return (
    <div id="movenext" >
        <img src={flowHome} alt="" />
    </div>
  )
}

export default MoveNextHome