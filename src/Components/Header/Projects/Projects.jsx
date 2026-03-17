import React from 'react'
import back from "../../Image/home.png"
import { Link } from 'react-router-dom'

import "./projects.css"



export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="title-projects">
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
            <li>Project 5</li>
            <li>Project 6</li>
          </ul>
        </div>
        <div className="object">


        </div>
      </div>





      <div className="back-home">
        <Link to="/"><img src={back} alt=''></img></Link>
      </div>
    </div>
  )
}
