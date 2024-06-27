import React from 'react'

import FlowBar from "../assets/flow-bar.png"

import "../css/ContactPageStyle.css"
import Marquee from 'react-fast-marquee'

function ContactPage() {
  return (
    <div id='contact-box' >
        
        <div>
            <div></div>
            <div>
                <img src="" alt="" />
                <div></div>
            </div>
        </div>

<div id='contact-flow-bar-box-upper'>
<Marquee direction={"down"}>
        <div id='contact-flow-bar-box'>
        <img src={FlowBar} alt="" />
        <img src={FlowBar} alt="" />
        <img src={FlowBar}  alt="" />
        </div>
        </Marquee>

        </div>
    </div>
  )
}

export default ContactPage