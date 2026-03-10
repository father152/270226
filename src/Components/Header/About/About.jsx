import React from 'react'
import back from "../../Image/home.png"
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div className="about">
        
        <h1>About</h1>
          <div className="back-home">
                    <Link to="/"><img src={back} alt=''></img></Link>
                </div>
        </div>
  )
}
