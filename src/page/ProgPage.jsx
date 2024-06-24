import React from 'react'

import "../css/ProgPageStyle.css"
import "../css/AuraPageStyle.css";
import rightArrow from "../assets/right-arrow-line-3.png";
import ProjectCard from '../components/ProjectCard';

import progBoxLeft from "../assets/prog-box-left.png"
import progBoxRight from "../assets/prog-box-right.png"
import MoveNextTeam from '../components/MoveNextTeam';
function ProgPage() {
  return (
    <div id='prog-box'>
      <div id="prog-box-title-box">
        <div id="prog-box-title">Solutions We  Build</div>
        <div id="prog-box-title-img-box">
          <img id="prog-box-title-img" src={rightArrow} alt="" />
          <div> What Is The Point Of Owning A Race Car If You Can’t Drive It?</div>
        </div>
      </div>


        <div id='pojects-box'>
            <img id='pojects-box-side' src={progBoxLeft}  />
            <div id='prog-box-inner'>
            <ProjectCard title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />


            </div>
            <img id='pojects-box-side' src={progBoxRight}  />
        </div>


        <MoveNextTeam/>
    </div>
  )
}

export default ProgPage