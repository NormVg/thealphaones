import React from 'react'

import DefProg from "../assets/def-prog.png"

import "../css/ProjectCardStyle.css"

function ProjectCard({title,content}) {
  return (
    <div id='project-card' onClick={ ()=>{alert(title)} }>
        <div id='prog-card-title'>{title}</div>
        <div id='prog-card-con'>{content}</div>
        <img src={DefProg} alt="" />
    </div>
  )
}

export default ProjectCard