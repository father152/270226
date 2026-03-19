import React from 'react'
import back from "../../Image/free-icon-back-3183312.png"
import { Link } from 'react-router-dom'



export default function Project1() {
  return (
    <div>
        
        
        <h2>Project-1</h2>


 <div className="back-home">
        <Link to="/projects">
          <img src={back} alt="home" />
        </Link>
      </div>


    </div>
  )
}
