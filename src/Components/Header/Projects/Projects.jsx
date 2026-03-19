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
            <Link to="/project1"><li>Project 1</li></Link>
            <Link to="/project2"><li>Project 2</li></Link> 
         
          </ul>
        </div>
        <div className="object">
         rtrt
        </div>


      </div>





      <div className="back-home">
        <Link to="/"><img src={back} alt=''></img></Link>
      </div>
    </div>
  )
}
