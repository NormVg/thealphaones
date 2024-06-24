import React from 'react'

import headingBottomBorder from "../assets/heading-br.png"
import subBarimg from "../assets/grey-arrow-line-right.png"

import "../css/IntroPageStyle.css"
import BtBox from '../components/BtBox'
import MoveNextIntro from '../components/MoveNextIntro'

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


        <div id='intro-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat natus quibusdam aspernatur? Nisi, alias incidunt suscipit adipisci minima earum dolorum iusto in quia eaque voluptatum, praesentium vero exercitationem dolorem!
        </div>

        <div id='intro-bt-box'>
          <BtBox/>
          <BtBox/>
          <BtBox/>
        </div>

        <MoveNextIntro/>
    </div>
  )
}

export default IntroPage