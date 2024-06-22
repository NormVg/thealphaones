import React from 'react'

import headingBottomBorder from "../assets/heading-br.png"
import subBarimg from "../assets/grey-arrow-line-right.png"

import "../css/IntroPageStyle.css"

function IntroPage() {
  return (
    <div id='intro-box'>
        <div id='heading-intro'>
        Crafting Dreams, Defining Futures: 
        <div><img src={headingBottomBorder} alt="" /></div>
        </div>

        <div id='sub-head'>
        Who we are?
        <div id='heading-sub'><img src={subBarimg} alt="" /> Following’s Not Really My Style.</div>
        </div>
    </div>
  )
}

export default IntroPage