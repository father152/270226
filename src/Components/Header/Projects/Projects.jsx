import React from 'react'
import back from "../../Image/home.png"
import { Link } from 'react-router-dom'


export default function Projects() {
  return (
    <div className="projects">
        
        <h1>Projects</h1>
          <div className="back-home">
            <Link to="/"><img src={back} alt=''></img></Link>
        </div>
        </div>
  )
}
